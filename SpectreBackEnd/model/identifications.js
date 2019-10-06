const mongoose= require('mongoose');

const identificationsSchema = mongoose.Schema({
    last_id: { type: Number, required: true }
});

module.exports = mongoose.model('identifications', identificationsSchema);