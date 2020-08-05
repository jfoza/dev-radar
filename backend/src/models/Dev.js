const mongoose = require('mongoose');
const PointShema = require('./utils/PointShema');

const DevShema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location:{
        type: PointShema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevShema);