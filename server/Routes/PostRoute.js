const router = require('express').Router()
const Post = require('../models/PostModel')
const User = require('../models/UserModel')

// router.get('/',async(req, res)=>{
//     res.send('hello')
// })

router.post('/:id', async(req, res)=>{
    const userId = req.params.id
    const image = req.body.image
    const description = req.body.description

    try {
        
        const verifyUser = await User.findById(userId)
    
        if(verifyUser){
            try {
                const newPost = await Post.create({userId, image, description})
                res.status(200).json(newPost)
            } catch (error) {
                res.status(500).json('error: ' + error)
            }
        }else{
            res.status(400).json('user not found')
        }
    } catch (error) {
        res.status(500).json('error: ' + error)
    }

})

router.get('/:id?', async(req, res) => {
    const userId = req.params.id

    if(userId){
        try {
            const posts = await Post.findOne({userId: userId})
            if(!posts){
                res.status(404).json('404 Not Found')
            }else{

                res.status(200).json(posts)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    else{
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }
})

module.exports = router