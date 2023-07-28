const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require ('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
const database  = {
    users:[
        {
            id:'121',
            name : 'Aman',
            email:'amansoni@gmail.com',
            password:'hoja',
            entries: 0, 
            joined: new Date()
        },
    
        {
            id:'122',
            name : 'Banana',
            email:'banana@gmail.com',
            password:'booking',
            entries: 0, 
            joined: new Date()
        }
    ]
}
app.get('/',(req ,res)=>{
    res.send(database.users)
})
app.post('/signin',(req,res)=>{
   if(req.body.email=== database.users[0].email && req.body.password === database.users[0].password){
    res.json(database.users[0])
   }
   else{
    res.status(404).json('fail')
   }
})
app.post('/register',(req ,res)=>{
    const {email, name , password}= req.body;
    bcrypt.hash(password , null , null , function(err , hash){
        console.log(hash)
    })
    database.users.push({
        id:'12'+(database.users.length+1),
        name : name,
        email: email,
        password: password,
        entries: 0, 
        joined: new Date()
    })
    res.json(database.users[database.users.length-1])
})
app.get('/profile/:id',(req , res)=>{
    const {id}=req.params
    let found = false
    database.users.forEach(user => {
        if(user.id===id){
            return res.json(user);
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})
app.put('/image', (req, res)=>{
    const {id}=req.body
    let found = false
    database.users.forEach(user => {
        if(user.id===id){
            user.entries++
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})
app.listen (3000 , ()=>{
    console.log('app is running on port 3000')
}) 
