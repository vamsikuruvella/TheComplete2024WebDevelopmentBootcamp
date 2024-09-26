import express from "express"
import morgan from "morgan"

const app=express();
const port=3000

//Custom logging funtion
function logger(req,res,next){ 
    console.log("Request Method: "+req.method);
    console.log("Request URL: "+req.url);
    next(); //when commented execution won't reach app.use since this is custom middleware.
}

app.use(logger)//morgan('tiny'));//tiny, combined, short, dev, common, are some examples of OOB formats

app.get("/",(req,res)=>{
    res.send("<h1>Hello. </h1>")
});

app.listen(port,()=>{
    console.log(`Server Running in ${port}`);
    
})
