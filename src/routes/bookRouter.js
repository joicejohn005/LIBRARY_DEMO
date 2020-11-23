const express= require('express');
const booksRouter=express.Router();
var books=[
    {
      title:'paathummayude aadu',
      author:'Basheer',
      genre:'Drama',
      img:"aadu.jpg"
    },
    {
      title:'Rich dad Poor dad',
      author:'Robert',
      genre:'Business',
      img:"richdad.jpg"
    },
    {
      title:'C',
      author:'Dennis',
      genre:'Computer',
      img:"c.jpg"
    }
  ]
  booksRouter.get('/',function(req,res){
    res.render("books",
    {
      nav:[{link:'/books',name:"Books"},
      {link:'/authors',name:'Author'},
      {link:'/login',name:'Login'}], 
      title:"Books",
      head1:"Library_Authors",
      books
    })
  })
  booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render("book",
    {
      nav:[{link:'/books',name:"Books"},
      {link:'/authors',name:'Author'},
      {link:'/login',name:'Login'}],
      title:"Book",
      head1:"Library_Book",
      book:books[id]
    })
  })
module.exports=booksRouter;