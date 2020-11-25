const express= require('express');
const booksRouter=express.Router();
function router(nav)
{
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
      nav, 
      title:"Books",
      head1:"Library_Books",
      books
    })
  })
  booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render("book",
    {
      nav,
      title:"Book",
      head1:"Library_Book",
      book:books[id]
    })
  })
  return booksRouter;
}
module.exports=router;