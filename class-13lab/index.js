let express =require('express')
let cors = require('cors')
let app = express()
app.use(cors())
app.use(express.json())

app.post("/getData", (req,res)=>{
    let {name,email} = req.body
    console.log(name,email)
    res.json({name,email})
})

app.listen(3000, ()=>{
    console.log("server is running on 3000")
})