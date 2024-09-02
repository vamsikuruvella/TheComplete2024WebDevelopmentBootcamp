// window.onload(){}

var buttons=document.querySelectorAll("button")
for(i in buttons){
    buttons[i].addEventListener("click",function(){
        alert("I got clicked.");
    })
}
//Higher order functions
function add(n1,n2){
    return n1+n2;
}
function multiply(n1,n2){
    return n1*n2;
}
function Calc(n1,n2,oper){
    oper(n1,n2);
}