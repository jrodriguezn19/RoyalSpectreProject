const mongoose= require('mongoose');

const imagesSchema = mongoose.Schema({
    id_project: { type: String, required: true },
    url_image: { type: String, required: true }
});

module.exports = mongoose.model('images', imagesSchema);