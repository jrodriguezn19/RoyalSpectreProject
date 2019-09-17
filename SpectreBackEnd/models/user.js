// Dependencies here
const mongoose = require('mongoose');
// Schema
var userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

// Return model
module.exports = mongoose.model('user', userSchema);