const express = require('express');
const router = express.Router();
const { TravelArea } = require("../models/travelArea")
const multer = require('multer');
const upload = multer({
  dest : 'uploads/'
});

router.post('/add', (req, res) => {

  const travelArea = new TravelArea(req.body);

  travelArea.save((err, info) => {
    if (err) return res.json({ sucess: false, err })
    return res.status(200).json({
      success: true,
      travelArea
    })
  })
})

router.get('/list', (req, res) => {
  
  TravelArea.find()
    .exec((err, doc) => {
      if (err) return res.status(400).send(err)
    res.status(200).json({success:true, doc})
  })
})


module.exports = router
