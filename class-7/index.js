let express =require('express')
let JWT = require("jsonwebtoken")
let app = express()
app.use(express.json())
let bcryptjs = require('bcryptjs')
let mongoose = require('mongoose')
let User = require("../class-7/db/db")
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
    let {name,email,pass,role}=req.body
    let findData = await User.findOne({email})
    console.log(findData,"hehheheh");

    if(findData){
        return res.send("userr hai")
    }else{
        let updateddp = await bcryptjs.hash(pass,12)
        console.log(updateddp,"deeeee");
        
        let UserInfo = new User({
            name,email,
            pass : updateddp,
            role : role||"user"
        })
        await UserInfo.save()
        res.send("done.......")
    }
    
})
app.post("/login",async(req,res)=>{
    let {email,pass,role}=req.body
    let findData = await User.findOne({email})
    console.log(findData,"hehheheh");

    let token = JWT.sign({email:findData.email,role:findData.role},"heheheheee")
    console.log(token,"hehhe");

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
let auth = (req,res,next)=>{
        let token = req.headers.authorization;
        console.log(token,"tokenn");

        if(!token){
            return res.json("Kaun hai app..")
        }
        let decode = JWT.verify(token,"heheheheee")
        console.log(decode,"isse");
        next()
    }
let authh = (req,res,next)=>{
    let token = req.headers.authorization;
    console.log(token,"tokenn");

    if(!token){
        return res.json("Kaun hai app..")
    }
    let decode = JWT.verify(token,"heheheheee")
    if(decode.role != "admin"){
        return res.json("role change kr")
    }
    console.log(decode,"isse");
    next()
}
app.get("/api",auth,(req,res)=>{
    res.json({
        msg : "hell0"
    })
})
app.get("/admin",authh,(req,res)=>{
    res.json({
        msg : "hell0"
    })
})


app.listen(3000,()=>{
    console.log("server..");
    
})





