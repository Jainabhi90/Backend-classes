let express =require('express')
let router = express.Router()
router.use(express.json())
let JWT = require("jsonwebtoken")
let bcryptjs = require('bcryptjs')
let mongoose = require('mongoose')
let User = require("../models/user")
mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
    console.log("db..");
    
})
const cors = require('cors');
router.use(cors());

router.post("/signUp",async(req,res)=>{
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

module.exports = router;