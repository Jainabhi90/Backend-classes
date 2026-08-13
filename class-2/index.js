// Checking your server details can't do anything just to read 

// let os = require('os')
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.uptime()/3600);



// creating webserver 

let http = require("http")

let server =  http.createServer((req,res)=>{
        res.end("helloo")
        
        
    })
    server.listen(1234,()=>{
        console.log("server runinggg..");
        
    })