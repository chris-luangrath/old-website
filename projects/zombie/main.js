/*var input, output, print;
        input = document.getElementById('input');
        output = document.getElementById('output');
print = function(){
    input.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            var input= document.getElementById('list');
            input.innerHTML = document.getElementById('todo').value;
        }
    });
};
*/
window.onload = function() {
    
var input, output, addItem, addItemIfEnter, makeItem, makeNarrator, makeOptions, addStory;
var reply = "";

addItem = function(x) {
        output.appendChild(x);
        var br = document.createElement("br");
        output.appendChild(br);
    };
addStory = function(narrator, options) {
    output.appendChild(narrator);
    output.appendChild(options);
    var br = document.createElement("br");
    output.appendChild(br);
};
makeNarrator = function(narrator) {
    var newItem = document.createElement("li");
        newItem.className = "narrator";
        var text = document.createTextNode(narrator);

        newItem.appendChild(text);
        
        return newItem;
};
makeOptions = function(options) {
    var newItem = document.createElement("li");
        newItem.className = "options";
        var text = document.createTextNode(options);

        newItem.appendChild(text);
        
        return newItem;
};

addItemIfEnter = function(e) {
        if (e.which === 13 && input.value !== "") {
            addItem(makeItem());
            reply = input.value;
            input.value = "";
        }
    };
makeItem = function() {
        var newItem = document.createElement("li");
        newItem.className = "reply";
        var text = document.createTextNode(input.value);

        newItem.appendChild(text);
        
        return newItem;
    };
input = document.getElementById('input');    
output = document.getElementById('output');   



var wait4Enter = true;
var printed = false;
/* THIS DON'T WORK    GET HELP    SAVE YOURSELF    ALL IS LOST
do {
    if (wait4Enter === true) {
        if (printed === false){
            addStory(makeNarrator("Text"),makeOptions("Also Text"));
            printed = true;
        }
        input.onkeypress = addItemIfEnter;
        } else {
            setTimeout(check, 1000); // check again in a second
    }
} while (wait4Enter === true);
console.log(reply);
console.log("Holy heck it works");
};
*/
/*
var zombie = {
        
        
        alert("The year is 20ZZ. Zombies exist now. It's kinda scary");
        var go = false;
        do {
            action = prompt("You are walking down the street when suddenly, you see a zombie walking towards you! You can: walk the other way, strike up a conversation, or punch him in the schnozz. What will you do: walk, talk, or fight?");
            if (action == "walk") {
                alert("Lucky for you, zombies can't walk fast. You hastily speed walk away from danger and you live another day. You Win!");
                go = true;
            } else if (action == "talk") {
                alert("You stop what you're doing and start talking to the zombie. It turns out, zombies don't eat brains. It was just a racial stereotype that early Americans created. It turns out, the zombie's name is Tom, and he wants to be a software engineer. Good for him. Good for you. You Win.");
                go = true;
            } else if (action == "fight") {
                alert("You feel a surge of adrenalin as you stop walking towards the zombie. You will your hand to burst into flames and you run towards the zombie and deck him in the face. He falls down and starts to cry about \"How much it hurts\" and \"how he has a family\". Soon, the zombie is no more. You Win?");
                go = true;
            } else if (action == "walk, talk, or fight") {
                alert("OH YOU THINK YOU'RE SOO CLEVER, EH BOY?");
                go = true;
            } else {
                alert("type walk, talk, or fight. Lets try again.");
            }

        } while (go === false);
    };
    */