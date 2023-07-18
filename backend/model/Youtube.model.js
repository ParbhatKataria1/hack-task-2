const mongoose = require('mongoose');
const youtubeSchema = mongoose.Schema({
    title:String,
    description:String,
    thumbnails:String,
    publishedAt:Date
}, {versionKey:false});
const YoutubeModel = mongoose.model('video', youtubeSchema);
module.exports = {YoutubeModel};