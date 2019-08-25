// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
var profileSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    email: String,
    project: String
});

// Return model
module.exports = restful.model('Profile', profileSchema);