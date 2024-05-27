const mongoose = require('mongoose')

const post = new mongoose.Schema({
    userId:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true}
}, {Collection:'posts'})

module.exports = mongoose.model('Post', post)