console.log('entered admin..');
const path=require('path');
const express=require('express');
//const data=require('./data')
const fs=require('fs');

const router=express.Router();

// router.post('/login_admin',(req,res,next)=>{   //use function takes an array of event handlers
//     console.log(req.body);
//     console.log('in post');
//    res.sendFile(path.join(__dirname,'../','views','chat.html'));   
//    //res.status(200).json({message:"success"});
// });

// router.get('/login_admin',(req,res,next)=>{   //use function takes an array of event handlers
//     console.log("in admin get");
//     console.log(req.body);
//     fs.writeFile("chat.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>{
//         err?console.log(err): //res.redirect('/login_admin')
//         {
//             let chats = fs.readFileSync('chats.txt', 'utf8').split('\n').filter(Boolean)
//             res.send()
//         }
        
//     });

//     //fs.readFileSync
//     //res.sendFile(path.join(__dirname,'../','views','chat.html')); 
// });

//for umbrella funcn
router.use((req,res,next)=>{   //use function takes an array of event handlers
    console.log('in login_admin_use');
    
    console.log(req.body);
    console.log(req.body.message);
    console.log(req.body.username);

    let chatHTML="";

    if(req.body.username===undefined && req.body.message===undefined)
    {
        chatHTML=`<div><p>No chat history available.</p>`;

        chatHTML+=`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/routes/login_admin" method="POST">`;
        chatHTML+=`<input type="text" name="message" id="message" placeholder="write your message here">`;
        chatHTML+= `<input type="hidden" name="username" id="username">`;
        chatHTML+= `<button type="submit">send</button></form></div>`;
        //res.sendFile(path.join(__dirname,'../','views','chat.html'));   
        res.send(chatHTML);
    }
    //console.log(res.body)

    else{


        if(fs.existsSync('chat.txt'))
        {
            console.log('not empty');
            let chats = [];
            chats = fs.readFileSync('chat.txt', 'utf8').split('\n').filter(Boolean);

            chatHTML="Chat History: \n";

            for (const chat of chats) {
                const [username, message] = chat.split(':');
                chatHTML +=` <p><strong>${username}:</strong> ${message}</p>`;
            }

            chatHTML+=`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/routes/login_admin" method="POST">`;
            chatHTML+=`<input type="text" name="message" id="message" placeholder="write your message here">`;
            chatHTML+= `<input type="hidden" name="username" id="username">`;
            chatHTML+= `<button type="submit">send</button></form></div>`;
            fs.writeFile("chat.txt",`${req.body.username}: ${req.body.message}\n`,{flag:'a'},(err)=>{
                err?console.log(err): res.send(chatHTML);
                
            });
        }
        else
        {
            console.log('empty');
            chatHTML=`<div><p>No chat history available.</p>`;

            chatHTML+=`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/routes/login_admin" method="POST">`;
            chatHTML+=`<input type="text" name="message" id="message" placeholder="write your message here">`;
            chatHTML+= `<input type="hidden" name="username" id="username">`;
            chatHTML+= `<button type="submit">send</button></form></div>`;
            fs.writeFile("chat.txt",`${req.body.username}: ${req.body.message}\n`,{flag:'a'},(err)=>{
                err?console.log(err): res.send(chatHTML);
            });
        }
       
    }
    
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