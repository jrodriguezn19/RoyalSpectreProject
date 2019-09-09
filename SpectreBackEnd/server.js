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

// define Express app
const app = express();

// add Helmet to enhance the API security
app.use(helmet());

// add bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enable Cross-Origin Resource Sharing, CORS for all requests
app.use(cors());

// add Morgan to log HTTP requests
app.use(morgan('combined'));

// define an endpoint to return all profiles
app.get('/', async (req, res) => {
   res.send(await getProfile());
});

//Login
app.post('/login', async (req, res) => {
   //var email = req.userEmail;
   //var password = req.userPassword;
   console.log(req.body);
   res.send({ message: 'logined'});
})

// check JSON Web Tokens
//JWT [Only checked for POST, DELETE, PUT endpoint. No authority required for GET request of this app to view]
//JWT will intercept requests to POST, DELETE, and PUT endpoints
const jwtCheck = jwt({
   secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri:'https://dev-q39f5c5h.au.auth0.com/.well-known/jwks.json'
   }),
   audience: 'https://profiles-api',
   issuer: 'https://dev-q39f5c5h.au.auth0.com/',
   algorithms: ['RS256']
})

//app.use(jwtCheck);

// POST, DELETE, PUT, startDatabase
app.post('/', async (req, res) => {
   const newProfile = req.body;
   const testProfile = {Name: 'Ivan', email: 'exampleEmail@email.com', password: 'spectre'};
   await insertProfile(testProfile);
   res.send({ message: 'New profile inserted.'});
});

app.delete('/:id', async (req, res) => {
   await deleteProfile(req.params.id);
   res.send({ message: 'Profile removed.' });
});

app.put('/:id', async (req, res) => {
   const updatedProfile = req.body;
   await updateProfile(req.params.id, updatedProfile);
   res.send({ message: 'Profile updated.' });
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
   await insertProfile({Name: 'Jayden P (first in DB)', email: 'exampleEmail@email.com', password: 'spectre' });
   console.log('--start database object created!--')
})

// start the server and log console
app.listen(8000, () => {
   console.log('Example app listening on port 8000!')
});
