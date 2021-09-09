const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth')
const { User } = require('../models/User');

//const { auth } = require('../middleware.auth');

router.post('/register', (req, res) => {
  
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // 이메일 유무 체크
    if (!user) {
      return res.json({
        loginSuccess: false,
        messgae: "해당 이메일을 찾지 못하였습니다."
      })
    }
    // 이메일이 있다면 비밀번호 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다" })
      
      // 비밀번호 확인 -> 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰을 cookie에 저장
        res.cookie('_token', user.token)
        .status(200)
        .json({loginSuccess: true, userId: user._id})
      })
    })
  })
})

router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id },
    { token: '' },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
  })
})

router.get('/auth', auth, (req, res) => {
  // role - 0: 일반 유저, 1: 관리자, 2: 슈퍼관리자
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role
   })
})

module.exports = router