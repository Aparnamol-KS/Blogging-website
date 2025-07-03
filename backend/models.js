const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://aparnamolks:aparna123@todo-app.4yjmmxo.mongodb.net/Blog-app')

const UserSchema = new mongoose.Schema({
    username: String,
    name:String,
    password: String
})

const BlogSchema = new mongoose.Schema({
    title : String,
    content : String,
    userId : String
})

module.exports = {
    UserModel: mongoose.model('users',UserSchema),
    BlogsModel : mongoose.model('blogs',BlogSchema)
}