let mongoose= require('mongoose')
   
let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    pass:String

})

let User= mongoose.model("user",userSchema)
module.exports=User