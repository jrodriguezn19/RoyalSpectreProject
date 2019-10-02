const mongoose= require('mongoose');

const commentsSchema = mongoose.Schema({
    id_user: { type: String, required: true },
    id_image: { type: String, required: true }
});

module.exports = mongoose.model('comments', commentsSchema);