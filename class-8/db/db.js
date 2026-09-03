let mongoose= require('mongoose')
   
let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    role:{
        type : String,
        emuun:["user","admin"],
        default:"user"
    }

})

let User= mongoose.model("user",userSchema)
module.exports=User