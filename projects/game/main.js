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
    
var input, output, addItem, continueIfEnter, makeReply, makeNarrator, makeOptions, addStory, openDoor, printStory0;
var room1, room2, room3, room4;
var visited1, visited2, visited3, visited4;
var began = false, end = false, open = false, timer = 0;
var reply = "";
var gender = "";
var currentRoom = "a";

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

continueIfEnter = function(e) {
        if (e.which === 13 && input.value !== "" && end === false) {
            reply = (input.value).toLowerCase();
            addItem(makeReply(reply));
            //continue with story
            printStory0();
            input.value = "";
            //
        }
    };
makeReply = function(theReply) {
        var newItem = document.createElement("li");
        newItem.className = "reply";
        
        var text = document.createTextNode(theReply);
        newItem.appendChild(text);
        
        return newItem;
    };
    //begin, yesStart
    //hasn't started, says yes to start. yesStart is true but begin is false;
printStory0 = function() {
    timer++
    if (began === false){
        if (reply === "yes"){
            room1();
        } else if (reply === "no"){
            addItem(makeNarrator("IF YOU AREN'T READY, WHY ARE YOU HERE?"));
            addItem(makeNarrator("If your goal was to be a loser, you achieved that"));
            end = true;
        } else {
            addItem(makeNarrator("Choose an option from the options"));
            addStory(makeNarrator("This is the first text-based adventure on the site. Are you ready?"));
            addItem(makeOptions("(Yes, No)"));
        }
    } else if (began == true){
        switch (currentRoom) {
            case 1:
                if (reply === "examine") {
                    addItem(makeNarrator("There's nothing but the door and the hole in the wall."));
                    addItem(makeNarrator("What do you do?"));
                    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
                    timer++;
                } else if (reply === "go through door") {
                    if (open === false) {
                        addItem(makeNarrator("The door is locked."));
                        addItem(makeNarrator("What do you do?"));
                        addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
                        timer++;
                    } else if (open === true) {
                        addItem(makeNarrator("You did it in " + timer + " turns! Good Job!"));
                        addItem(makeNarrator("Maybe someday I'll make the game longer..."));
                        addItem(makeNarrator("This really was just a test of my coding abilities."));
                        addItem(makeNarrator("Thank you for visiting my site and checking out my stuff!"));
                        addItem(makeNarrator("It really means a lot!"));
                    }
                } else if (reply === "go through hole") {
                    room2();
                    timer++
                } else if (reply === "wait") {
                    addItem(makeNarrator("You sit down and wait."));
                    addItem(makeNarrator("What do you do?"));
                    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
                } else {
                    addItem(makeNarrator("Choose an option from the options"));
                    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
                }
                break;
            case 2:
                room2();
                break;
            case 3:
                room3();
                break;
            case 4:
                room4();
                break;
        }
        
    } else {
        addItem(makeNarrator("You broke the game. I'm not sure how you did it, but you did."));
        addItem(makeNarrator("You're a hacker now. You bested me and the system. Good for you."));
        addItem(makeNarrator("You win I guess"));
        end = true;
    }
    
};

room1 = function() {
    if (visited1 === false){
        addItem(makeNarrator("Ok so you wake up in a white room you woke up."));
    } else {
        addItem(makeNarrator("You are in the white room."));
    }
    addItem(makeNarrator("There's nothing in it but a metal door and a hole opposite of the door."));
    addItem(makeNarrator("The hole is large enough to enter"));
    addItem(makeNarrator("What do you do?"));
    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
    currentRoom = 1;
    visited1 = true;
};
room2 = function() {
    if (visited2 === false){
        addItem(makeNarrator("Through the hole you find a hallway."));
    } else {
        addItem(makeNarrator("You return to where the "));
    }
    addItem(makeNarrator("There's nothing in it but a metal door and a hole opposite of the door."));
    addItem(makeNarrator("What will you do?"));
        addItem(makeOptions("(Left, Right, Back)"));
    visited2 = true;
};
room3 = function() {
    if (visited1 === false){
        addItem(makeNarrator("Ok so you wake up in a white room you woke up."));
    } else {
        addItem(makeNarrator("You are in the white room."));
    }
    addItem(makeNarrator("There's nothing in it but a metal door and a hole opposite of the door."));
    addItem(makeNarrator("What do you do?"));
    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
    currentRoom = 3;
    visited3 = true;
};
room4 = function() {
    if (visited1 === false){
        addItem(makeNarrator("Ok so you wake up in a white room you woke up."));
    } else {
        addItem(makeNarrator("You are in the white room."));
    }
    addItem(makeNarrator("There's nothing in it but a metal door and a hole opposite of the door."));
    addItem(makeNarrator("What do you do?"));
    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
    currentRoom = 4;
    visited4 = true;
};



openDoor = function() {
    if(open === false) {
        
    }
};
input = document.getElementById('input');    
output = document.getElementById('output');

input.onkeypress = continueIfEnter;
};
/*
var wait4Enter = true;
var printed = false;
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
