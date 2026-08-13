import fs from "fs" // file system modern
let fs=require('fs')


// create a file(name ,file content)
fs.writeFileSync("index.txt","sbdj")


// read the file
fs.readFileSync("index.txt")//sync
fs.readFile()//async->require a callback function
fs.readFileSync("index.txt").toString() // required to be a converted in string to be in readable 
//delete a file
fs.unlinkSync()// sync
fs.unlink()// async

// create a directory
fs.mkdirSync("digoe")//sync
fs.mkdir()//async

// delete a directory
fs.rmdirSync("digoe");

//create file in a directory
fs.writeFileSync("digoe/index.txt","sbdj")