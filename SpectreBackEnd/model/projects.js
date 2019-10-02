const mongoose= require('mongoose');

const projectsSchema = mongoose.Schema({
    id_user: { type: String, required: true },
    target_fund: { type: Number, required: true },
    current_fund: { type: Number, required: true, default: 0 },
    status: { type: String, required: true }
});

module.exports = mongoose.model('projects', projectsSchema);