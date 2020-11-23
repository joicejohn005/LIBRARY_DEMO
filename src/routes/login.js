const { name } = require('ejs');
const express=require('express');
const registerRouter = require('./register');
const loginRouter=express.Router();
registerRouter.get('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/books',name:"BOOKS"},
        {link:'/authors',name:"AUTHORS"},
        {link:'/login',name:"LOGIN"},
        {link:'/register',name:"REGISTER"}],
        title:"Login",
        head1:"Library_Login",
        login
    })
})
module.exports=loginRouter;