const express = require('express');

const app = express();
app.get('/error',(req,res)=>{

    try{
        let user = null ;
        console.log(user.name);
        res.send("helllllllooo")
    }
    catch(err){
        res.send("errorrr",err);
        
    }
    console.log("hellooo");
    console.log("hey");
    
    
})
app.post("/signUp",async(req,res)=>{

    try{
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
    }catch(err){
        res.send("error",err)
    }
   
    
})
app.post("/login", async (req, res) => {
    try{
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
    }catch(err){
        res.send("errrrrorrr",err)
    }
    
})


app.listen(3000,()=>{
    console.log("server runing...");
    
})