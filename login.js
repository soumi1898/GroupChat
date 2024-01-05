const path=require('path');
const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{   //use function takes an array of event handlers
    console.log('in login.js');
    res.sendFile(path.join(__dirname,'../','views','login.html'));   
});


module.exports=router;