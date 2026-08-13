// Checking your server details can't do anything just to read 

// let os = require('os')
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.uptime()/3600);



// creating webserver by nodejs

// let http = require("http")

// let server =  http.createServer((req,res)=>{
//         console.log(req.url,"hehe");
//         // res.write("hii       ")

//         if(req.url == '/'){
//             res.write("from home / ")
//         }
//         else if(req.url == '/about'){
//             res.write("from /about  ")
//         }
//         else if(req.url == '/contact'){
//             res.write("from /contact  ")
//         }
//         res.end("helloo")
        
        
//     })
//     server.listen(1234,()=>{
//         console.log("server runinggg..");
        
//     })




// creating server from exoress

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("hi i am from /home")
})
app.get('/about',(req,res)=>{
    res.send("hi i am from /about")
})
app.use(()=>{
    console.log("hehehhe");
    
})
app.get('contact',(req,res)=>{
    res.send("hi i am from /contact")
})

app.listen(1234,()=>{
    console.log("server runing...");
    
})