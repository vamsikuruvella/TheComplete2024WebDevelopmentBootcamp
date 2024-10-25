import express from "express"
import bodyParser from "body-parser"

const app=express()
const port=3000

app.get('/',(req,res)=>{
    // res.locals.number_of_letters=1;
    res.render('index5.ejs')
});



app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})