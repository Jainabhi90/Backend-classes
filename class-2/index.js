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




// creating server from express

const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send("hi i am from /home")
})
app.post('/data',(req,res)=>{
    res.send("hello data from server")
})

app.get('/about',(req,res)=>{
    res.send("hi i am from /about")
})
app.use((req,res,next)=>{
    console.log("me thoda sa janedunga ");
    next()
})
app.use((req,res)=>{
    console.log("me to bilkul hi nahi janedungaa.");
    
})
app.get('contact',(req,res)=>{
    res.send("hi i am from /contact")
})

app.listen(3000,()=>{
    console.log("server runing...");
    
})