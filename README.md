1. You can use, which open the debugger in the console
>>debugger
function aa(nam){
console.log(nam);
}

2. If you are gonna link js file to html doc in head tag, it has to use window.onload or $(document).ready, beacuse the js file will load first and try to access the HTML body which is not loaded yet.

