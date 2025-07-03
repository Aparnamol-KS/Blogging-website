const jwt = require('jsonwebtoken')

JWT_KEY = "yr2u3rhrv";

function authMiddleware(req,res,next){
    let token = req.headers.token;
    let username = jwt.verify(token,JWT_KEY);
    if(!username){
        res.status(403).json({
            message:"Incorrect token!!"
        })
    }else{
        req.username = username;
        next();
    }
}

module.exports = {
    authMiddleware
}

