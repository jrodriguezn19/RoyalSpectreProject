const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    id: Number,
    projectName: String,
    likes: Number
});

module.exports = mongoose.model('project', projectSchema);