console.log("Hello");
const fs=require("fs");

// fs.writeFile("message.txt","Hello From NodeJS",function(err){
//     if(err){
//         throw err;
//     }
//     console.log("File saved!")
// })


fs.readFile("message.txt",'utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data)
})