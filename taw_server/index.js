const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors")
const config = require("./config/key")

const multer = require('multer')
const { uuid } = require('uuidv4');
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET
})
const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '')
  }
})

const upload = multer({ storage }).single('image')
app.post('/api/upload', upload, (req, res) => {
  
  let travelFile = req.file.originalname.split(".")
  const fileType = travelFile[travelFile.length - 1]
  
  console.log(req.file)
  // res.send({
  //   message: "upload!"
  // })
  
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuid()}.${fileType}`,
    Body: req.file.buffer
  }
  console.log('param :', params)
  s3.upload(params, (error, data) => {
    if (error) {
      res.status(500).send(error)
    }
    
    res.status(200).send(data)
  })
})

//bodyParser 가 client에서 오는 정보를 분석후 사용할 수 있게 가공
//application/x-www-form-urlencoded
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// mongoDB connect
const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello Travel After Work"))

app.use('/api/travelArea', require('./routes/TravelAreaRoute'))

const port = process.env.PORT || 3005

app.listen(port, () => {
  console.log('===========================')
  console.log(`Server Start on ${port} port!`)
  console.log('===========================')
});