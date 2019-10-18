// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var router = express.Router();
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const mongoose = require('mongoose');

//In-memory instance of database
const { startDatabase } = require('./database/mongo');
const { insertProfile, getProfile, deleteProfile, updateProfile } = require('./database/profiles');

//Initiate mongoose schema
const Projects = require('./model/projects');
const Images = require('./model/images');
const Comments = require('./model/comments');
const Identifications = require('./model/identifications');
const UsersStatistic = require('./model/usersStatistic');

//Connect to database in cloud
mongoose.connect("mongodb+srv://Ivan:ProjectSpectre@spectre-h7vto.mongodb.net/Spectre?retryWrites=true&w=majority")
   .then(() => {
      console.log("Connected to cloud database");
   })
   .catch(() => {
      console.log("Failed to connect");
   });
// define Express app
const app = express();

// start the server and log console
app.listen(8000, () => {
   console.log('Example app listening on port 8000!')
});

// serve FrontEnd folder
app.use(express.static('public'));

// add Helmet to enhance the API security
app.use(helmet());

// add bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enable Cross-Origin Resource Sharing, CORS for all requests
app.use(cors());

// add Morgan to log HTTP requests
app.use(morgan('combined'));

// Set up Auth0 configuration
const authConfig = {
   domain: "dev-q39f5c5h.au.auth0.com",

   audience: "https://profiles-api"
};
// A get funtion that result all projects sort by newest to oldest
app.get('/projectNewest', async (req, res) => {
   Projects.find().sort({ '_id': -1 }).then(document => {
      res.status(200).json({
         message: "Project fetch Successfully",
         projects: document
      });
   })
});
// A get funtion that result all projects sort by most popular to less popular
app.get('/projectPopular', async (req, res) => {
   Projects.find().sort({ 'score_comment_react': -1 }).then(document => {
      res.status(200).json({
         message: "Project fetch Successfully",
         projects: document
      });
   })
});
// A get funtion that result 6 projects sort by most popular to less popular for side-menu on front-end
app.get('/projectPopularSideMenu', async (req, res) => {
   Projects.find().sort({ 'score_comment_react': -1 }).limit(6).then(document => {
      res.status(200).json({
         message: "Project fetch Successfully",
         projects: document
      });
   })
});
// A get funtion that result 6 people sort by most popular to less popular for side-menu on front-end
app.get('/peoplePopularSideMenu', async (req, res) => {
   UsersStatistic.find().sort({ 'score_comment_react': -1 }).limit(6).then(document => {
      res.status(200).json({
         message: "Project fetch Successfully",
         users: document
      });
   })
});
// a function that return selected project
app.post('/selectedProject', async (req, res) => {
   Projects.find({ _id: req.body.id_project })
      .then(document => {
         res.status(200).json({
            message: "Project fetch Successfully",
            project: document
         });
      })
});
// a function that return all comments that contain in a project
app.post('/retrieveComments', async (req, res) => {
   Comments.find({ id_project: req.body.id_project })
      .then(document => {
         res.status(200).json({
            message: "Project fetch Successfully",
            comments: document
         });
      })
});
// a function that return all projects from a user
app.post('/projectUser', async (req, res) => {
   Projects.find({ id_user: req.body.id_user }).sort({ '_id': -1 }).then(document => {
      res.status(200).json({
         message: "Project fetch Successfully",
         projects: document
      });
   })
});
// a function that return detail of selected user
app.post('/detailUser', async (req, res) => {
   UsersStatistic.findOne({ id_user: req.body.id_user }).then(document => {
      res.send(document);

   })
});
// a function to store new comment
app.post('/sendComment', async (req, res) => {
   let id_user_init = '';
   let user_name_init = '';
   let score = 2; // initiate default score for score_comment_react field

   // Switch function to assign score based on comment or Quick React feature
   switch (req.body.typeReact > 0) {
      case req.body.typeReact === null: {
         score = 2;
         break;
      }
      case req.body.typeReact === 1: {
         score = 15;
         break;
      }
      case req.body.typeReact === 2: {
         score = 7;
         break;
      }
      case req.body.typeReact === 3: {
         score = 1;
         break;
      }
      case req.body.typeReact === 4: {
         score = -7;
         break;
      }
      default: {
         score = -15
         break;
      }
   }
   // Assign value as 'Anonymous' if the users who comment, are not login
   if (req.body.id_user === null) {
      id_user_init = 'Anonymous';
   } else {
      id_user_init = req.body.id_user;
   }
   if (req.body.user_name === null) {
      user_name_init = 'Anonymous';
   } else {
      user_name_init = req.body.user_name;
   }
   const date = new Date();
   // Store the comment into schema
   const comment = new Comments({
      id_user: id_user_init,
      user_name: user_name_init,
      profile_picture: req.body.profile_picture,
      id_project: req.body.id_project,
      comment_value: score,
      image_url: req.body.image_url,
      date: date.getHours()
   });
   comment.save();
   // Preparing update popularity of that project by either decrease or increase the score_comment_react field
   Projects.findOne({ _id: mongoose.Types.ObjectId(req.body.id_project) }).then(document => {
      let lastTotalComment = document.score_comment_react + score;
      let id_user_update = document.id_user;
      Projects.updateOne(
         { _id: mongoose.Types.ObjectId(req.body.id_project) },
         { $set: { "score_comment_react": lastTotalComment } }).then(function (result) {
            console.log("this is user id " + id_user_update);
             // Preparing update popularity of user who has that project by either decrease or increase the score_comment_react field
            UsersStatistic.findOne({ id_user: id_user_update }).then(document2 => {
               let total_comment = document2.score_comment_react + score;
               UsersStatistic.updateOne(
                  { id_user: id_user_update },
                  { $set: { "score_comment_react": total_comment } }).then(function (result) {
                     res.send("New comment added");
                  });
            });
         });
      });
   })

// check JSON Web Tokens
// JWT [Only checked for POST, DELETE, PUT endpoint. No authority required for GET request of this app to view]
// JWT will intercept requests to POST, DELETE, and PUT endpoints
// Based on code from Auth0 standard config for JWT - https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/
const jwtCheck = jwt({
   secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
   }),
   audience: authConfig.audience,
   issuer: `https://${authConfig.domain}/`,
   algorithm: ["RS256"]
});

// PING : Define and endpoint that must be called with an access token
app.get("/api/external", jwtCheck, (req, res) => {
   res.send({
      msg: "Your Access Token was successfully validated! Lets upload an image or update a project?",

   });
});
// Only use to blanket check jwt for all code below. Currently jwtCheck captured in each HTTP request
//app.use(jwtCheck);

// define an endpoint to return all profiles
app.get('/', async (req, res) => {
   res.send(await getProfile());
});

//Create New Project
app.post('/createProject', async (req, res) => {
   const project = new Projects({
      id_user: req.body.id_user,
      user_name: req.body.user_name,
      image_url: req.body.image_url,
      target_fund: req.body.target_fund,
      current_fund: 0,
      status: req.body.status
   });
   project.save();
   //Update user statistic or add new record if that user uploaded project for the first time
   UsersStatistic.findOne({ id_user: req.body.id_user }).then(document => {
      if (!document) {
         const userStats = new UsersStatistic({
            id_user: req.body.id_user,
            user_name: req.body.user_name,
            image_url: req.body.photo_profile
         });
         userStats.save();
         res.send("User added");
      } else {
         let total_project = document.total_project + 1;
         Projects.updateOne(
            { id_user: req.body.id_user },
            { $set: { "total_project": total_project } }).then(function (result) {
               res.send("New project added");
            });
      }
   });
});

//Delete Project
app.post('/deleteProject', async (req, res) => {
   Comments.find({ comment_value: { $gt: 1, $lt: 3 }, id_project: mongoose.Types.ObjectId(req.body.id_project) }
   ).then(document => {
      console.log(document);
      // Checking function to check a project is eligible to delete or not
      if (document[0] !== undefined) {
         res.send({ message: "Cannot delete project, because it contains comment" });
      } else {
         Projects.findOneAndDelete(
            { _id: mongoose.Types.ObjectId(req.body.id_project) }
         ).then(result => {
            let old_score = result.score_comment_react;
            console.log("Update " + result.id_user);
            //Update user statistic by decrease score_comment_react field to update their popularity
            UsersStatistic.findOne({ id_user: result.id_user }).then(result2 => {
               let new_score = result2.score_comment_react - old_score;
               UsersStatistic.updateOne(
                  { id_user: result.id_user },
                  { $set: { "score_comment_react": new_score } }
               ).then(result => {
                  Comments.deleteMany(
                     { id_project: req.body.id_project }
                  ).then(result => {
                     res.send({ message: "Project Deleted" });
                  })
               })
            })
         })
      }
   })
});

//Get name for image that will be uploaded. this one is to make sure every image has unique name
app.post('/imageName', async (req, res) => {
   Identifications.find().then(document => {
      console.log(document);
      let lastImageNumber = document[0].last_id;
      let newImageNumber = lastImageNumber + 1;

      Identifications.updateOne(
         { _id: '5d9bf08b1c9d440000dedab9' },
         {
            $set: { 'last_id': newImageNumber },
            $currentDate: { lastModified: true }
         }
      ).then(function (result) {
         res.send(newImageNumber.toString());
      });
   });
});

//Delete Comment
app.post('/deleteComment', async (req, res) => {
   Comments.findOneAndDelete(
      { "_id": mongoose.Types.ObjectId(req.body.id_comment) }
   ).then(result => {
      Projects.findOne({ _id: mongoose.Types.ObjectId(result.id_project) }).then(document => {
         let new_score = document.score_comment_react - result.comment_value;
         let id_user_update = document.id_user;
         //Update project statistic by decrease score_comment_react field to update their popularity
         Projects.updateOne(
            { _id: mongoose.Types.ObjectId(result.id_project) },
            { $set: { score_comment_react: new_score } }).then(function (result2) {
               console.log("Updated " + new_score);
               console.log("this is user id " + id_user_update);
               //Update user statistic by decrease score_comment_react field to update their popularity
               UsersStatistic.findOne({ id_user: id_user_update }).then(document2 => {
                  let total_comment = document2.score_comment_react - result.comment_value;
                  UsersStatistic.updateOne(
                     { id_user: id_user_update },
                     { $set: { score_comment_react: total_comment } }).then(function (result) {
                        res.send("New comment added");
                     });

               });
            });
      });
   })
});

//Setup image
app.post('/imageUpload', async (req, res) => {
   Projects.findOne().sort({ '_id': -1 }).limit(1).then(document => {
      const image = new Images({
         id_user: document._id,
         image_url: req.body.image_url
      });
      image.save();
      console.log("Added");
      res.send({ message: 'Image setup' });
   });

});


// Login function
app.post('/login', async (req, res) => {
   console.log(req.body);
   res.send(await getProfile());
   res.send({ message: 'logged in - ok' });
})


// POST, DELETE, PUT, startDatabase
app.post('/', jwtCheck, async (req, res) => {
   const newProfile = req.body;
   const testProfile = { Name: 'Ivan', email: 'exampleEmail@email.com', password: 'spectre' };
   await insertProfile(testProfile);
   res.send({ message: 'New profile inserted.' });
});

app.delete('/:id', jwtCheck, async (req, res) => {
   await deleteProfile(req.params.id);
   res.send({ message: 'Profile removed.' });
});

app.put('/:id', jwtCheck, async (req, res) => {
   const updatedProfile = req.body;
   await updateProfile(req.params.id, updatedProfile);
   res.send({ message: 'Profile updated.' });
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
   await insertProfile({ Name: 'Jayden P (first in DB)', email: 'exampleEmail@email.com', password: 'spectre' });
   console.log('--start database object created!--')
})

//add likes to project
router.get('/project/', function (req, res) {

   project.find({})
      .then(data => {
         res.send(data);
      })
      .catch(error => {
         res.status(500).json({
            error: error
         });
      })
});

router.put('/project/:projectName/likes/:likeCount', function (req, res) {
   var projectName = req.params.projectName;
   var count = req.params.likeCount;
   count++;
   console.log("here")
   console.log(projectName + " " + count)
   project.findOneAndUpdate({ projectName: projectName }, { $set: { likes: count } }).then(data => {
      if (data.length < 1) {
         return res.status(400).json({
            message: "Project not found",
         });
      }
      else {
         return res.status(200).json({
            message: "Project likes updated successfully"
         });
      }
   }).catch(error => {
      res.status(500).json({
         error: error
      });
   })
});
