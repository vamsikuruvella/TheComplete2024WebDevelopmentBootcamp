//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
import morgan from "morgan"

const app=express();
const port=3000

app.get("/",(req,res)=>{
    res.send("<h1>Hello. </h1>")
});