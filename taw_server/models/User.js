const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const slatRounds = 10;
const jwt = require('jsonwebtoken');
//const moment = require('moment');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minglength: 5
  },
  name: {
    type: String,
    maxlength: 20
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number
  }
})

userSchema.pre('save', function (next) {
  const user = this;
  
  if (user.isModified('password')) {
    bcrypt.genSalt(slatRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next()
      })
    })
  } else {
    next()
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch)
  })
}

userSchema.methods.generateToken = function (cb) {
  var user = this;

  // jsonwebtoken을 이용해 token 생성\  
  var token = jwt.sign(user._id.toHexString(), 'secretToken')

  user.token = token
  user.save(function (err, user) {
    if (err) return cb(err)
    cb(null, user)
  })
}

userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  // token decode
  jwt.verify(token, 'secretToken', function (err, decoded) {
    // client token  과 db token 비교 
    user.findOne({ "_id": decoded, "token": token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user)
    })
  })
}

const User = mongoose.model('User', userSchema)

module.exports = { User}



