import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url" 
import bodyParser from "body-parser"
const _dirname=dirname(fileURLToPath(import.meta.url))
console.log(import.meta);
const app=express();
const port=3000;

console.log("Core Modules in Express: "+Object.keys(express));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("<h1>Hello, World!</h1>");
    console.log(req.rawHeaders);
});

app.get("/middleware",(req,res)=>{
    console.log("Dir Name: "+_dirname);
    res.sendFile(_dirname+"/public/index.html")
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    // res.sendFile(_dirname+"/public/index.html")
    res.sendStatus(201)
    //res.send({"!!":"111"});
});

app.

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
    console.log(req);
});

app.listen(port,()=>{
    console.log(`Server Running in ${port}`);
    
})