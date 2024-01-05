console.log('entered admin..');
const path=require('path');
const express=require('express');
//const data=require('./data')
const fs=require('fs');

const router=express.Router();

router.post('/login_admin',(req,res,next)=>{   //use function takes an array of event handlers
    console.log(req.body);
    console.log('in post');
   res.sendFile(path.join(__dirname,'../','views','chat.html'));   
   //res.status(200).json({message:"success"});
});

router.get('/login_admin',(req,res,next)=>{   //use function takes an array of event handlers
    console.log("in admin get");
    console.log(req.body);
    fs.writeFile("chat.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>{
        err?console.log(err): res.redirect('/login_admin')
        
    });

    //fs.readFileSync
    //res.sendFile(path.join(__dirname,'../','views','chat.html')); 
});

//for umbrella funcn
router.use((req,res,next)=>{   //use function takes an array of event handlers
    console.log('in login_admin_use');
    
    console.log(req.body.message);
    console.log(req.body.username);
    res.sendFile(path.join(__dirname,'../','views','chat.html'));   
    //console.log(res.body)
    fs.writeFile("chat.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>{
        err?console.log(err): res.redirect('/')
        
    });
    //return res.sendFile(path.join(__dirname,'../','views','chat.html'));   

 });





module.exports=router;


// fs.readFileSync('chat.txt',(err,data)=>{
        //     if(err)
        //     {
        //         console.log(err);
        //         data="No chats";
        //     }
        // });