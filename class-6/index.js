let express =require('express')
let app = express()
app.use(express.json())
let bcryptjs = require('bcryptjs')
let mongoose = require('mongoose')
let User = require("../class-6/db/db")
mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
    console.log("db..");
    
})
const cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
    const users = await User.find({}, { pass: 0 });
    res.json(users);
});

app.post("/signUp",async(req,res)=>{
    let {name,email,pass}=req.body
    let findData = await User.findOne({email})
    console.log(findData,"hehheheh");

    if(findData){
        return res.send("userr hai")
    }else{
        let updateddp = await bcryptjs.hash(pass,12)
        console.log(updateddp,"deeeee");
        
        let UserInfo = new User({
            name,email,
            pass : updateddp
        })
        await UserInfo.save()
        res.send("done.......")
    }
    
})
app.post("/login",async(req,res)=>{
    let {email,pass}=req.body
    let findData = await User.findOne({email})
    console.log(findData,"hehheheh");

    if(findData){
        let isMatch = await bcryptjs.compare(pass, findData.pass)
        if(isMatch){
            return res.json({name: findData.name, email: findData.email})
        }
        return res.send("pass didnt match")
    }else{
        return res.send("user not found")
    }
    
})


app.listen(3000,()=>{
    console.log("server..");
    
})





