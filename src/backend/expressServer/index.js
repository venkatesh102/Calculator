import express from 'express'
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
})
app.post("/register",(req,res)=>{
    res.sendStatus(200)
}) 
app.put("/user/user1",(req,res)=>{
    res.sendStatus(200)
})
app.listen(3000,()=>{
    console.log("port is running")
}) 