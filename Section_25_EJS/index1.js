import express from "express"

const app=express()
const port=3000

app.get('/',(req,res)=>{
    const today=new Date();
    const day=today.getDay();
    console.log(day);
    var typeDay="";
    var advice="";
    if (day==0 || day==6){
        typeDay="a Weekend";
        advice="It's time to have fun";
    }
    else{
        typeDay="a weekday";
        advice="It's time to work hard"
    }
    res.render("index1.ejs",{dayType:typeDay,advice:advice,});

})

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
})