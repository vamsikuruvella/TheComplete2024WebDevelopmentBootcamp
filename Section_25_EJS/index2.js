import express from "express"

const app=express()
const port=3000

let bowl=['oranges','apples','grapes']

app.get('/',(req,res)=>{
    res.render('index2.ejs',{ fruits:bowl, })
})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})