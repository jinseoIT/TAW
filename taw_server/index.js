const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors")
const config = require("./config/key")

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

const port = process.env.PORT || 3005

app.listen(port, () => {
  console.log('===========================')
  console.log(`Server Start on ${port} port!`)
  console.log('===========================')
});