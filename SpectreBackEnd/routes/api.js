// Dependencies
var express = require('express');
var router = express.Router();

// Models
// var Profile = require('../models/profile');
//
// // Routes
// Profile.methods(['get', 'put', 'post', 'delete']);
// Profile.register(router, '/');

router.get('/', function (req, res) {
    res.send('Welcome')
})
// Return router
module.exports = router;