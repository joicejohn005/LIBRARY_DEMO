const express=require('express');
const loginRouter=express.Router();
function router(nav)
{

loginRouter.get('/',function(req,res)

{
    res.render("login",
    {
        nav,
        title:"Login",
        head1:"Library_Login",
        login
    })
})
return loginRouter;
}
module.exports=router;