const mongoose = require('mongoose');
const YoutubeSchema = mongoose.Schema({
    title:String,
    description:String,
    thumbnails:String,
    publishedAt:String
},{versionKey:false});
const YoutubeModel = mongoose.model('video', YoutubeSchema);
module.exports = {YoutubeModel}