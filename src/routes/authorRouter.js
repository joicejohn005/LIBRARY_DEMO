const express= require('express');
const authorsRouter=express.Router();
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
      nav:[{link:'/books',name:"Books"},
      {link:'/authors',name:'Author'},
      {link:'/login',name:'Login'}],
      title:"Authors",
      head1:"Library_Authors",
      authors
    })
  })
  authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render("author",{
      nav:[{link:'/books',name:"Books"},
      {link:'/authors',name:'Author'},
      {link:'/login',name:'Login'}],
      title:"Author",
      head1:"Library_Authors",
      author:authors[id]
    })
  })  
  module.exports=authorsRouter; 