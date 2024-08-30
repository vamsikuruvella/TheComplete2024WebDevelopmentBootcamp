window.onload=function(){
    alert("Hello From index.js")

    var tagname=document.getElementsByTagName("li");
    var tagnamelen=tagname.length;
    var classname=document.getElementsByClassName('btn')
    console.log("Tag Name: "+tagname+"\nTag Name Len: "+tagnamelen+"\nClass Name: "+classname);
}