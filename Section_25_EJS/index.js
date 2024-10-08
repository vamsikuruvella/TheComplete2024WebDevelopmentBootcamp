import express from "express"

const app=express()
const port=3000

app.length('/',(req,res)=>{
    res.render("index.ejs",{dayType:"a weekday",advice:"It's time to work hard."})
})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})