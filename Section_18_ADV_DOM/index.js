// window.onload(){}

var buttons=document.querySelectorAll("button")
for(i in buttons){
    var buttonClass=buttons[i].className.split(" ")[0];
    print("Line 6 "+ buttonClass);
    buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
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

/*
debugger
Calc(1,2,add);
//put this in console for debugging.
*/