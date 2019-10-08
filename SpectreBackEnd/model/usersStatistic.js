const mongoose= require('mongoose');

const usersStatisticSchema = mongoose.Schema({
    id_user: { type: String, required: true },
    user_name: { type: String, required: true },
    image_url: { type: String, required: true},
    total_project: { type: Number, required: true, default: 1 },
    score_comment_react: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('usersStatistic', usersStatisticSchema);