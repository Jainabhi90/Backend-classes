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
        console.log(req.url,"hehe");
        // res.write("hii       ")

        if(req.url == '/'){
            res.write("from home / ")
        }
        else if(req.url == '/about'){
            res.write("from /about  ")
        }
        res.end("helloo")
        
        
    })
    server.listen(1234,()=>{
        console.log("server runinggg..");
        
    })