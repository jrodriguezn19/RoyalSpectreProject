import 'dotenv/config';

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/', require('../routes/api'));

//HTTP Requests
app.get('/', (req, res) => {
    return res.send('Recieved a GET HTTP method');
});
app.post('/', (req, res) => {
    return res.send('Recieved a POST HTTP method');
});
app.put('/', (req, res) => {
    return res.send('Recieved a PUT HTTP method');
});
app.delete('/', (req, res) => {
    return res.send('Recieved a DELETE HTTP method');
});


// Start Server
app.listen(process.env.PORT, () => {
    console.log('Example app listening on port' , process.env.PORT)
    });