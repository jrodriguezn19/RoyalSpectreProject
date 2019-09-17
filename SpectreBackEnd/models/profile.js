// Dependencies
const mongoose = restful.mongoose;

// Schema
var profileSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    email: String,
    project: String
});

// Return model
module.exports = mongoose.model('Profile', profileSchema);