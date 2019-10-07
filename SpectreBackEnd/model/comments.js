const mongoose= require('mongoose');

const commentsSchema = mongoose.Schema({
    id_user: { type: String, required: true },
    id_project: { type: mongoose.Schema.Types.ObjectId, required: true },
    image_name: { type: String, required: true },
    user_name: { type: String, required: true },
    image_url: { type: String, required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('comments', commentsSchema);