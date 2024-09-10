window.onload = function() {
    function BellBoy(yearsOfExp, name, cleaningRept) {
        this.experience = yearsOfExp;
        this.name = name;
        this.skills = cleaningRept;
    }

    var bellboy1 = new BellBoy(12, "Tommy", ['Bedroom', 'corridor']);
    var bellboy2 = new BellBoy(2, "Jimmy", ['Bath', 'Bedroom', 'corridor']);
    
    console.log(bellboy1.name);
    console.log(bellboy1.experience);
    console.log(bellboy2.name);
    console.log(bellboy2.experience);
}

var buttons = document.querySelectorAll("button");

// Use forEach instead of for...in
buttons.forEach(function(button, i) {
    var rawclass = button.className;
    
    console.log("Length  " + buttons.length);
    console.log(rawclass);
    
    if (rawclass) {
        var buttonClass = rawclass.split(" ")[0];
        console.log(button.className);
        console.log("Line 6 " + buttonClass);
    }
    
    button.addEventListener("click", function() {
        var buttonInnerHTMl = this.innerHTML;

        switch (buttonInnerHTMl) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var tom5 = new Audio("sounds/snare.mp3");
                tom5.play();
                break;
            case "k":
                var tom6 = new Audio("sounds/crash.mp3");
                tom6.play();
                break;
            case "l":
                var tom7 = new Audio("sounds/kick-bass.mp3");
                tom7.play();
                break;
            default:
                console.log(buttonInnerHTMl);
        }
    });
});

// Higher order functions
function add(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function Calc(n1, n2, oper) {
    return oper(n1, n2);
}

/*
debugger
Calc(1,2,add);
//put this in console for debugging.
*/
