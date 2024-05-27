const mongoose = require('mongoose');

const Image = new mongoose.Schema({
    image:{type:String}
}, {collection:'images'})

module.exports = mongoose.model('ImageData',Image)