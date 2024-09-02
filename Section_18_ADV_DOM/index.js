// window.onload(){}




var buttons=document.querySelectorAll("button")
for(i in buttons){
    buttons[i].addEventListener("click",function(){
        alert("I got clicked.")
    })
}