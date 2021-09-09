const { User } = require('../models/User');
let auth = (req, res, next) => {
  // 인증 처리
  // client 에서 token을 가져온다.
  let token = req.cookies._token;
  
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true })
    
    req.token = token;
    req.user = user;
    next(); // middle ware에서 다음으로 갈 수 있게 next 추가
  })
  
}

module.exports = {auth}