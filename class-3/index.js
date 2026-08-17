let express = require('express')
let app = express()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get('/h/:id',(req,res)=>{
    let {id} = req.params
    res.send(id)
})

app.get('/search',(req,res)=>{
    console.log(req.query,"hehehe");
    
    res.send("hello")
})
app.listen(3000)