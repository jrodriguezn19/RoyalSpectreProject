const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const {startDatabase} = require('./database/mongo');
const {insertProfile, getProfile} = require('./database/profiles');

// define Express app
const app = express();

// define an array to work as the database (temporary solution)
const profile = [
   {name: 'Kevin Lee'}
];

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

// start the in-memory MongoDB instance
startDatabase().then(async () => {
   await insertProfile({title: 'Hello new profile from the in-memory database'});
})

// start the server and log console
app.listen(8000, () => {
   console.log('Example app listening on port 8000!')
});