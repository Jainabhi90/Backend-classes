let express =require('express')
let JWT = require("jsonwebtoken")
let app = express()
app.use(express.json())
let bcryptjs = require('bcryptjs')
let mongoose = require('mongoose')
let User = require("../class-9/db/db")
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
app.post("/login", async (req, res) => {
    let { email, pass, role } = req.body
    let findData = await User.findOne({ email })
    console.log(findData, "hehheheh");
    if (!findData) {
        return res.send("user not found")
    }
    let isMatch = await bcryptjs.compare(pass, findData.pass)
    if (isMatch) {
        let token = JWT.sign(
            { email: findData.email, role: findData.role ,name : findData.name},
            "heheheheee"
        )
        console.log(token);
        
        return res.json({
            name: findData.name,
            email: findData.email,
            token: token
        })
    }
    return res.send("pass didnt match")
})
let auth = (req,res,next)=>{
        let token = req.headers.authorization;
        console.log(token,"tokenn");

        if(!token){
            return res.json("Kaun hai app..")
        }
        let decode = JWT.verify(token,"heheheheee")
        console.log(decode,"isse");
        req.user = decode;
        next()
    }

    let roleCheck = (role)=>{
        return (req,res,next)=>{
            if(req.user.role !== role){
              return res.send("who are you ?");
            }
            next();
        }
    }
// let authh = (req,res,next)=>{
//     let token = req.headers.authorization;
//     console.log(token,"tokenn");

//     if(!token){
//         return res.json("Kaun hai app..")
//     }
//     let decode = JWT.verify(token,"heheheheee")
//     if(decode.role != "admin"){
//         return res.json("role change kr")
//     }
//     console.log(decode,"isse");
//     next()
// }
app.get("/api",auth,roleCheck("admin"),(req,res)=>{
    res.json({
        msg : "hello from api"
    })
})
app.get("/admin",auth,roleCheck("admin"),(req,res)=>{
    res.json({
        msg : "hello from admin"
    })
})

// app.get("/me",(req,res)=>{
//     let token = req.headers.authorization;
//     if(!token){
//             return res.json("Kaun hai app..")
//     }
//     let decode = JWT.verify(token,"heheheheee")
//         console.log(decode,"isse");
//         req.user = decode;
//     res.json({
//         name : req.user.name,
//         email : req.user.email,
//         role : req.user.role
//     })
// })

 

// app.put("/me",async(req,res)=>{
//     let change = req.body;
//     console.log(change);
    
//     let token = req.headers.authorization;
//     if(!token){
//             return res.json("Kaun hai app..")
//     }
//     let decode = JWT.verify(token,"heheheheee")
//         console.log(decode,"isse");
//         req.user = decode;


//     let email = req.user.email;
//     console.log(email);
//       console.log(req.user.email,"byeeeee");
      
//     let findData = await User.findOne({email:email});
//         console.log(findData,"1st");
        
//         if(findData){
//             findData.name=change.name;
//             res.json({mas:"done",findData})
//            console.log(findData);
//         }
//         res.json({
//             msg: "kuch to gardbard hai "
//         })
// })
app.get('/me',auth,(req,res)=>{
   let change = {
      name :req.user.name,
      email:req.user.email,
      role:req.user.role,
   }
      res.json(change);
})
app.put('/me',auth,async(req,res)=>{
   let emaill = req.user.email;
   let findData = await User.findOneAndUpdate({emaill},{name:req.body.name}).select("-pass");
   res.send(findData)
})

app.patch('/users/:id/role',auth,roleCheck("admin"),async(req,res)=>{
   let {role} = req.body
   let findData = await User.findByIdAndUpdate(
      req.params.id,
      {role:role}
   ).select("-pass")
   res.json(findData)
})

app.post('/orders',auth,async(req,res)=>{
   let {productName,amount} = req.body

   let data = new Order({
      productName:productName,
      amount:amount,
      userId:req.user.id

   })

   await data.save()

   res.json(data)

})
app.get('/my-orders',auth,async(req,res)=>{

   let data = await Order.find({userId:req.user.id })

   res.json(data)

})


app.listen(3000,()=>{
    console.log("server..");
    
})





