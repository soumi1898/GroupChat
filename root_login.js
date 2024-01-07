const express=require('express');

const path=require('path');

const bodyParser=require('body-parser');

const app=express();   

const loginRoutes=require('./routes/login');

const messageRoutes=require('./routes/login_admin');

const chatRoutes=require('./routes/chat');
const exp = require('constants');

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login',loginRoutes);

app.use('/routes',messageRoutes);

app.use('/chat',chatRoutes);

app.use('/',(req,res,next)=>{   
    res.status(404).sendFile(path.join(__dirname,'views','default.html')); 

    //res.status(404).send("<h1>Page not found</h1>"); 
});

app.listen(7000);   