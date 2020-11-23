const express= require('express');
const registerRouter=express.Router();
registerRouter.get('/',function(req,res){
    res.render("register",
    {
      nav:[{link:'/books',name:"Books"},
      {link:'/authors',name:'Author'},
      {link:'/login',name:'Login'}],
      title:"Register",
      head1:"Library_Register",
      register
    })
})
module.exports=registerRouter; 