const express= require('express');
const registerRouter=express.Router();
function router(nav)
{
registerRouter.get('/',function(req,res){
    res.render("register",
    {
      nav,
      title:"Register",
      head1:"Library_Register",
      register
    }) 
})
return registerRouter;
}
module.exports=router; 