const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRoute = require('./Routes/UserRoute')
const PostRoute = require('./Routes/PostRoute')
const dotenv = require('dotenv')
const multer = require('multer')
const Images = require('./models/ImageModel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
  })

  const upload = multer({ storage: storage })

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8800

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected',()=>{console.log('connection established');})
mongoose.connection.on('error',()=>{console.log('connection error');})

// middleware
app.use(cors())
app.use(express.json())
// app.use('/uploads', express.static('uploads'))

app.get('/',(req, res)=>{
    res.send('hello')
})

// app.post('/upload',upload.single("image"), async(req, res)=>{
//     const image =  req.file.filename

//     try {
//         const savedImage = await Images.create({image})
//         res.json(savedImage)
//     } catch (error) {
//         res.json(error)
//     }
// })

app.get('/upload', async(req,res)=>{
    const image = await Images.find()
    res.status(200).json(image)
})

app.use('/api/users', UserRoute)
app.use('/api/post', PostRoute)

app.listen(PORT,()=>{
    console.log('server listening on port 8800');
})