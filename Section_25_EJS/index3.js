import express from "express"
import bodyParser from "body-parser"

const app=express()
const port=3000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    // res.locals.number_of_letters=0;
    res.render('index3.ejs')
});

app.post('/submit',(req,res)=>{
    const number_of_letters= (req.body["fName"]+req.body["lName"]).length;
    console.log(number_of_letters)
    res.render('index3.ejs',{numberofletters:number_of_letters})
});


app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})