import express from "express"
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello, World!");
    console.log(req.rawHeaders);
});

app.listen(port,()=>{
    console.log(`Server Running in ${port}`);
    
})