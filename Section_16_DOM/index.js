window.onload=function(){
    alert("Hello From index.js")

    var tagname=document.getElementsByTagName("li");
    var tagnamelen=tagname.length;
    var classname=document.getElementsByClassName('btn');
    var classnamelen=classname.length;
    var idname=document.getElementById("list");
    var queryname=document.querySelector("#title");//"#list a","li a","a",
    var queryallname=document.querySelectorAll("#list .item");
    console.log("Tag Name: "+tagname+"\nTag Name Len: "+tagnamelen+"\nClass Name: "+classname+"\nClass Name Len: "+classnamelen+"\nID Name: "+idname+"\nQuery Name: "+queryname+"\nQuery all Name: "+queryallname);
    var claslistname=idname.classList
    console.log("Class List: "+claslistname);
    classname.classList.toggle('vvvv');
    console.log(queryname.innerHTML);
    console.log(queryname.textContent);
}