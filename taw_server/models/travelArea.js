const { uuid } = require('uuidv4');

const mongoose = require('mongoose');

const travelAreaSchema = mongoose.Schema({
  uuid: {
    type: String,
    maxlength: 30
  },
  title: {
    type: String,
    maxlength: 50
  },
  lon: {
    type: String,
    maxlength: 20
  },
  lad: {
    type: String,
    maxlength: 20
  },
  imgUrl: {
    type: String,
    maxlength: 100
  },
  summary: {
    type: String,
    maxlength: 50
  },
  description: {
    type: String,
    maxlength: 200
  },
  region: {
    type: String,
    maxlength: 50
  },
  insideYn: { 
    type: Number,
    maxlength: 1
  }
})

travelAreaSchema.pre('save', function (next){
  console.log(uuid());
  const travelArea = this;
  travelArea.uuid = uuid();
  next()
})

const TravelArea = mongoose.model('TravelArea', travelAreaSchema)

module.exports = { TravelArea }