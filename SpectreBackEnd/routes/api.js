// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Profile = require('../users/profile');

// Routes
Profile.methods(['get', 'put', 'post', 'delete']);
Profile.register(router, '/');

// Return router
module.exports = router;