const zod = require('zod');

const SignUpInput = zod.object({
    username:zod.string().max(20).min(3),
    name:zod.string().min(3).max(50),
    password:zod.string().min(3).max(10)
})

const SigninInput = zod.object({
    username:zod.string().max(20).min(3),
    password:zod.string().min(3).max(10)
})

const CreateBlogSchema = zod.object({
    title:zod.string(),
    content:zod.string()
})


module.exports = {
    SigninInput,
    SignUpInput,
    CreateBlogSchema
}