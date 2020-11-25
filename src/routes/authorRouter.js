const express= require('express');
const authorsRouter=express.Router();
function router(nav)
{
var authors=[
    {
      place:'Vaikkam Muhammad Basheer',
      author:'Vaikkam',
      genre:'Story writer',
      img:"Basheer.jpeg"
    },
    {
      place:'Robert Toru Kiyosaki',
      author:'Hilo Hawali',
      genre:'Business coach',
      img:"robert.jpeg"
    },
    {
      place:'Dennis', 
      author:'C',
      genre:'Research',
      img:"dennis.jpeg"
    }
  ]
  authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
      nav,
      title:"Authors",
      head1:"Library_Authors",
      authors
    })
  })
  authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render("author",{
      nav,
      title:"Author",
      head1:"Library_Author",
      author:authors[id]
    }) 
  })
 return authorsRouter; 
}
  module.exports=router; 