const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRoute = require('./Routes/UserRoute')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8800

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected',()=>{console.log('connection established');})
mongoose.connection.on('error',()=>{console.log('connection error');})

// middleware
app.use(cors())
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('hello')
})
app.use('/api/users', UserRoute)

app.listen(PORT,()=>{
    console.log('server listening on port 8800');
})