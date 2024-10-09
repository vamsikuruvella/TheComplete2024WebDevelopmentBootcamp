import express from "express"

const app=express()
const port=3000

let bowl=['oranges','apples','grapes']

app.get('/',(req,res)=>{
    const data={
        items:['oranges','apples','grapes'],
        title:"EJS Tags",
        Seconds:new Date().getSeconds(),
        htmlContent:"<em>This is some EM text</em>"
    }
    res.render('index2.ejs',{data:data})
})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})