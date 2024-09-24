1. You can use, which open the debugger in the console
>>debugger
function aa(nam){
console.log(nam);
}

2. If you are gonna link js file to html doc in head tag, it has to use window.onload or $(document).ready, beacuse the js file will load first and try to access the HTML body which is not loaded yet.

To check if the NodeJS is installed use
node --version

Node REPL(Read Eval Print Loop)
is a computer environment where the user inputs are read and evaluvated, and then the results are returned to the user.
To enable you have to type 'node' in terminal
>.help should give you the commands to use
The REPL is similar to console in chrome with extra features
node index.js :: to run the js file in terminal after installing nodeJS

NPM -> Node Package manager

ExpressJS built upon NodeJS