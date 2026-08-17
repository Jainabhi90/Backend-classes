//ques 1
let os=require('os')
console.log(os.arch())
console.log((os.totalmem()/1024/1024/1024).toFixed(2))
console.log((os.freemem()/1024/1024/1024).toFixed(2))
console.log(os.uptime()/3600)

//ques2
const http = require("http");

const server = http.createServer((req, res) => {
  console.log( req.url);
  console.log( req.method);

  res.end("Welcome to my server");
});

server.listen(3000, () => {
  
});

//ques3

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } 
  else if (req.url === "/products") {
    res.end("Our Products");
  } 
  else if (req.url === "/login") {
    res.end("Login Page");
  } 
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


//ques 4,5
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/products", (req, res) => {
  res.send("Our Products");
});
app.get("/login", (req, res) => {
  res.send("Login Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.listen(3000, () => {
  
});