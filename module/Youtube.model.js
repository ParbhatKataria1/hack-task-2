const mongoose = require('mongoose');
const YoutubeSchema = mongoose.Schema({
    title:String,
    description:String,
    thumbnail_url:String,
    publish:String
},{versionKey:false});
const YoutubeModel = mongoose.model('video', YoutubeSchema);
module.exports = {YoutubeModel}