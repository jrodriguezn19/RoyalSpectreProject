// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const mongoose = require('mongoose');

//In-memory instance of database
const {startDatabase} = require('./database/mongo');
const {insertProfile, getProfile, deleteProfile, updateProfile} = require('./database/profiles');

const Projects = require('./model/projects');
const Images = require('./model/images');
const Comments = require('./model/comments');

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

// check JSON Web Tokens
// JWT [Only checked for POST, DELETE, PUT endpoint. No authority required for GET request of this app to view]
// JWT will intercept requests to POST, DELETE, and PUT endpoints
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

// Upload an image into a project
app.post("/imageUpload", jwtCheck, (req, res) => {

})

// Only use to blanket check jwt for all code below. Currently jwtCheck captured in each HTTP request
//app.use(jwtCheck);

// define an endpoint to return all profiles
app.get('/', async (req, res) => {
   res.send(await getProfile());
});

//Create New Project Ivan
app.post('/createProject', async (req, res) => {
   
   const project = new Projects({
      id_user: req.body.id_user,
      target_fund: req.body.target_fund,
      current_fund: 0,
      status: req.body.status
   });
   
   project.save();

   Projects.findOne().sort({'_id':-1}).limit(1).then(document =>{
      
      let id = document._id;
      console.log(id);
      const image = new Images({
         id_project: id,
         url_image: req.body.image_url
      });
      image.save();
      console.log("Added");
      res.send({ message: 'Project Inserted'});
      
   });
   
   console.log("Finish");
   
   
});
//Setup image
app.post('/imageUpload', async (req, res) => {
   Projects.findOne().sort({'_id':-1}).limit(1).then(document =>{
      const image = new Images({
         id_user: document._id,
         image_url: req.body.image_url
      });
      image.save();
      console.log("Added");
      res.send({ message: 'Image setup'});
   });
   
});
// Create new project
app.post('/newProject', async (req, res) => {
   const newProfile = req.body;
   await insertProfile(newProfile);
   res.send({ message: 'New project inserted.'});
});

// Create new project
app.post('/login', async (req, res) => {
   console.log(req.body);
   res.send(await getProfile());
   res.send({ message: 'logged in - ok'});
})


// POST, DELETE, PUT, startDatabase
app.post('/', jwtCheck, async (req, res) => {
   const newProfile = req.body;
   const testProfile = {Name: 'Ivan', email: 'exampleEmail@email.com', password: 'spectre'};
   await insertProfile(testProfile);
   res.send({ message: 'New profile inserted.'});
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
   await insertProfile({Name: 'Jayden P (first in DB)', email: 'exampleEmail@email.com', password: 'spectre' });
   console.log('--start database object created!--')
})



//How can i get all the user details?
