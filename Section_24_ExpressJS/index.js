import express from "express"
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello, World!</h1>");
    console.log(req.rawHeaders);
});

app.get('/about',(req,res)=>{
    res.send("<h1>About Me!</h1>");
    console.log(req.rawHeaders);
});

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact me!</h1>");
    console.log(req.rawHeaders);
});

app.get('/register',(req,res)=>{
    res.sendStatus(200);
    console.log(req.rawHeaders);
});

app.get('/user/vamsi',(req,res)=>{
    res.sendStatus(201);
    console.log(req.rawHeaders);
});

app.put('/user/vamsi',(req,res)=>{
    res.sendStatus(202);
    console.log(req.rawHeaders);
});

app.listen(port,()=>{
    console.log(`Server Running in ${port}`);
    
})