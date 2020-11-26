const express= require('express');
const nav=[
  {
    link:'/books',name:'Books'
  },
  {
     link:'/authors',name:'Authors'
  },
  {
    link:'/login',name:'Login'
  },
  {
    link:'/register',name:'Register'
  }
];
const booksRouter=require('./src/routes/bookRouter')(nav);
const authorsRouter=require('./src/routes/authorRouter')(nav);
const registerRouter=require('./src/routes/registerRouter')(nav);
const loginRouter=require('./src/routes/loginRouter')(nav);

const app=express();

app.set('view engine','ejs')
app.set('views',__dirname+'/src/views') // 1st VIEWS is variable that store path 2nd VIEW is folder that store our UI files

app.use(express.static('./public')) //INCLUDE STATIC FILES || include css file,images

app.use('/books',booksRouter)
app.use('/authors',authorsRouter)
app.use('/register',registerRouter)
app.use('/login',loginRouter)

//creating router
app.get('/', function(req,res){  //response corresponding to request
res.render("index", //'index' is the page that wish to load.
{
  nav,
  title:"Library",
  head1:"Library"
})
})

//booksRouter.get('/single',function(req,res){res.send('this is single book pg')})
//authorsRouter.get('/single',function(req,res){res.send('this is single book pg')})
app.listen(3210);