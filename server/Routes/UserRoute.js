const router = require('express').Router()
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'secret_key'

router.get('/', (req, res)=>{
    res.send('whats up')
})

router.post('/register', async (req, res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try {
        const newUser = await User.create({name, email, password})
        // 201 is status code for creation
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json(error)
    }

})

router.post('/login', async (req, res) => {
    const name =  req.body.name
    const password = req.body.password

    try {
        
        const user = await User.findOne({name:name})
        const token = jwt.sign({userId:user._id}, SECRET_KEY, {expiresIn:'1hr'})
    
        res.status(200).json(token)
    
        !user && res.status(404).send('user not found')
        
        user.password !== password && res.status(401).send('password mismatch')
    } catch (error) {
        res.status(500).json(error)
    }


})


module.exports = router