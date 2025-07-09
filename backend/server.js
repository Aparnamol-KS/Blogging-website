const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require('cors')

const { SignUpInput, SigninInput, CreateBlogSchema } = require('./types.js');
const { UserModel,BlogsModel } = require('./models.js');
const { authMiddleware } = require('./middleware.js');

app.use(express.json())
app.use(cors())
JWT_KEY = "yr2u3rhrv";

app.post('/signup', function (req, res) {
    const response = SignUpInput.safeParse(req.body);

    if (!response.success) {
        return res.status(411).json({
            message: "Incorrect Inputs!"
        })
    }
    const { username, name, password } = req.body;

    UserModel.findOne({
        username: username
    }).then(function (user) {
        if (!user) {
            UserModel.create({
                username: username,
                name: name,
                password: password
            })
            res.json({
                message: "User Signed up successfully!!"
            })

        } else {
            res.json({
                message: "User already exist!!"
            })
        }
    })

})


app.post('/signin', function (req, res) {
    const response = SigninInput.safeParse(req.body);

    if (!response.success) {
        return res.status(411).json({
            message: "Incorrect Inputs!!"
        })
    }

    const { username, password } = req.body;

    UserModel.findOne({
        username: username,
        password: password
    }).then(function (user) {
        console.log(user)

        if (!user) {
            return res.status(403).json({ 
                message: "User not exist!!" 
            })
        }else{
            let token = jwt.sign(username,JWT_KEY);
            res.send(token)
        }
    })
})

app.post('/createBlog',authMiddleware,function(req,res){
    let username = req.username;
    const response = CreateBlogSchema.safeParse(req.body);
    if(!response.success){
        return res.status(411).json({
            message: "Incorrect Inputs!!"
        })
    }

    const {title, content} = req.body;

    UserModel.findOne({
        username:username
    }).then(function(user){
        if(!user){
            res.status(403).json({
                message:"User not found"
            })
        }else{
            BlogsModel.create({
                title: title,
                content : content,
                userId : user._id
            })
            res.json({
                message: "Blog created successfully!!"
            })
        }
    })
})


app.get('/blogs',authMiddleware,function(req,res){
    let username = req.username;
    UserModel.findOne({
        username : username
    }).then(function(user){
        if(!user){
            res.status(403).json({
                message:"User not found!"
            })
        }else{
            BlogsModel.find({
            }).then(function(blogs){
                res.send(blogs)
                console.log(blogs)
            })
        }
    })

})


app.get('/blogs/:id',authMiddleware,function(req,res){
    const id = req.params.id;
    let username = req.username;
    UserModel.findOne({
        username:username
    }).then(function(user){
        if(!user){
            res.status(403).json({
                message:"User not exist!!"
            })
        }else{
            BlogsModel.findOne({
                _id : id
            }).then(function(blog){
                if(!blog){
                    return res.status(403).json({
                        message:"Blog couldn't find"
                    })
                }else{
                    res.send(blog);
                }
                
            })
        }
    })

})

app.get('/your_blogs',authMiddleware,function(req,res){
    let username = req.username;
    UserModel.findOne({
        username : username
    }).then(function(user){
        if(!user){
            return res.status(403).json({
                message:"user not found"
            })
        }else{
            BlogsModel.find({
                userId: user._id
            }).then(function(blogs){
                if(!blogs){
                    res.status(403).json({
                        message:"Blog couldn't find!"
                    })
                }else{
                    res.send(blogs);
                }
            })
        }
    })
})




app.listen(4000);