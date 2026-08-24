// let express = require('express')
// let app = express()

// app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.post('/data',(req,res)=>{
//     console.log(req.body);
    
//     res.send("helllloooo")
// })
// app.listen(4000,()=>[
//     console.log("Server is runnnnnnninggggg")
// ])


let express = require('express')
let app = express()
let cors = require('cors')
app.use(express.json())
app.use(cors())

let students =[
    {
        "id" :1,
        "name" : "Abhi",
        "age" : 20,
        "cllg" :"vedam"
    },
    {
        "id" :2,
        "name" : "chinche",
        "age" : 18,
        "cllg" : "vedam"
    },
    {
        "id" :3,
        "name" : "khushpal",
        "age" : 21,
        "cllg" : "adypu"
    },
    {
        "id" :4,
        "name" : "krishiv",
        "age" : 19,
        "cllg" : "adypu"
    },
    {
        "id" :5,
        "name" : "dikshita",
        "age" : 27,
        "cllg" : "soe"
    }
];


app.get('/',(req,res)=>{
    res.send(students)
})
app.get('/student/:id',(req,res)=>{
    let {id} = req.params
    let data = students.find((a)=>{
        return a.id == Number(id)
    })
    // console.log(data,"idiididid");
    if(!data){
        return res.status(404).json({msg:"not found"})
    }
    res.status(200).json({msg:data})
    
})
app.get('/search',(req,res)=>{
    let {cllg} = req.query
    console.log(cllg,"hehe");

   let data = students.filter((a)=>{
        return a.cllg == cllg
    })
    console.log(data);
    if(!data){
        return res.status(404).json({msg:"not found"})
    }
    res.status(200).json({msg:data})
    
    
})
app.post('/student',(req,res)=>{
    console.log(req.body);

    let obj = {
        ...req.body
    }
    students.push(obj)
})

app.put('/student/:id',(req,res)=>{
    let {id} = req.params
    let {change} = req.body
    let data = students.find((a)=>{
        // console.log(a);
        return a.id == Number(id)
        
    })
    data.name = change
    res.json({mas:"done",data})
    console.log(data);
    
})
app.delete('/student/:id',(req,res)=>{
    let {id} = req.params
    let obj = students.filter((a)=>{
        return a.id != Number(id)
    })
    students = obj
    res.json({
        msg : "deleted"
    })
    console.log(students);
    
})

app.listen(4000,()=>{
    console.log("server runnnnn..");
    
})