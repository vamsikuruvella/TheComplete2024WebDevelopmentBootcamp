import express from "express"
import bodyParser from "body-parser"

const app=express()
const port=3000

app.use(express.static("public"))

app.get('/',(req,res)=>{
    // res.locals.number_of_letters=1;
    res.render('index4.ejs')
});

app.get('/about',(req,res)=>{
    // res.locals.number_of_letters=1;
    res.render('about.ejs')
});

app.get('/contact',(req,res)=>{
    // res.locals.number_of_letters=1;
    res.render('contact.ejs')
});

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})