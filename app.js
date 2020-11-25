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
  }
];
const booksRouter=require('./src/routes/bookRouter');
const authorsRouter=require('./src/routes/authorRouter');
const registerRouter=require('./src/routes/register');
const loginRouter=require('./src/routes/login');

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