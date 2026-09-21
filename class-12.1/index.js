let express = require('express');
let app = express()
let signUp = require('./routers/SignUp')

app.use('/api',signUp)

app.listen(4000,()=>{
    console.log("serverr....");
    
})