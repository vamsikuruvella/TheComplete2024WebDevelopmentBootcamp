console.log("Hello");
const fs=require("fs");

fs.writeFile("message.txt","Hello From NodeJS",function(err){
    if(err){
        throw err;
    }
    console.log("File saved!")
})