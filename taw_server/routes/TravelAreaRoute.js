const express = require('express');
const router = express.Router();
const { TravelArea } = require("../models/travelArea")

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

module.exports = router
