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
    
var input, output, addItem, continueIfEnter, makeReply, makeNarrator, makeOptions, printStory0;
var weaponListMaker, equipWeapon, addWeapon;
var room1, room2, room3, room4;
var visited1 = false, visited2 = false, visited3 = false, visited4 = false;
var began = false, end = false, open = false, equipping = false, timer = 0, weapon = "", oldWeapon = "";
var vowels = ["a", "e", "i", "o", "u"];
var reply = "";
var currentRoom = 1;
var weapons =["sword", "hammer", "axe", "chainsaw", "shovel"];
var weaponList = "";

//var focus = window.getElementById('focus');

addItem = function(x) {
        output.appendChild(x);
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
            var replyString = reply.charAt(0).toUpperCase() + reply.slice(1);
            addItem(makeReply(replyString));
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

printStory0 = function() {
    timer++;
    if (began === false){
        if (reply === "yes"){
            began = true;
            room1();
        } else if (reply === "no"){
            addItem(makeNarrator("IF YOU AREN'T READY, WHY ARE YOU HERE?"));
            addItem(makeNarrator("If your goal was to be a loser, you achieved that"));
            end = true;
        } else {
            addItem(makeNarrator("Choose an option from the Parentheses"));
            addItem(makeNarrator("Are you ready to escape the Building?"));
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
                    timer++;
                    room2();
                } else if (reply === "wait") {
                    addItem(makeNarrator("You sit down and wait."));
                    addItem(makeNarrator("What do you do?"));
                    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
                    timer++;
                } else {
                    addItem(makeNarrator("Choose an option from the Parentheses"));
                    addItem(makeOptions("(Examine, Go through door, Go through hole, Wait)"));
                    break;
                }
                break;
            case 2:
                if (reply === "left") {
                    timer++;
                    room3();
                } else if (reply === "right") {
                    timer++;
                    room4();
                } else if (reply === "back") {
                    timer++;
                    room1();
                } else {
                    addItem(makeNarrator("Choose an option from the Parentheses"));
                    addItem(makeOptions("(Left, Right, Back)"));
                    break;
                }
                break;
            case 3:
                if (reply === "examine") {
                    addItem(makeNarrator("Upon further inspection, you realize this computer controls the entire building."));
                    addItem(makeNarrator("However, its controls seem too complicated for you to understand"));
                    timer++;
                    
                } else if (reply === "leave") {
                    timer++;
                    room2();
                    break;
                } else if (reply === "wreck the computer") {
                    if (weapon !== null){
                        addItem(makeNarrator("Using your " + weapon + ", you wreck the computer a ton."));
                        addItem(makeNarrator("The building's system is now down."));
                        open = true;
                    } else {
                        addItem(makeNarrator("Ok, I'm guessing you've played the game already"));
                        addItem(makeNarrator("Since you don't have a weapon, this shouldn't be an option"));
                        addItem(makeNarrator("Y u tryna cheat, man?"));
                        window.location = "https://youtu.be/dQw4w9WgXcQ";
                    }
                }
                addItem(makeNarrator("What do you do?"));
                if (weapon === ""){
                    addItem(makeOptions("(Examine, Leave)"));
                } else {
                    addItem(makeNarrator("Choose an option from the Parentheses"));
                    addItem(makeOptions("(Examine, Leave, Wreck the Computer)"));
                }
                break;
            case 4:
                if (equipping === false) {
                    if (reply === "take a weapon") {
                        weaponListMaker();
                        addItem(makeNarrator("What weapon will you take?"));
                        addItem(makeOptions(weaponList));
                        equipping = true;
                        timer++;
                    } else if (reply === "leave") {
                        timer++;
                        room2();
                    } else if (reply === "back") {
                        timer++;
                        room1();
                    } else {
                        addItem(makeNarrator("Choose an option from the Parentheses"));
                        addItem(makeOptions("(Left, Right, Back)"));
                        break;
                    }
                } else if (equipping === true) {
                    oldWeapon = weapon;
                    equipWeapon(reply);
                    if(weapon !== oldWeapon){
                        if (oldWeapon === ""){
                            addItem(makeNarrator("You equipped the " + weapon + "."));
                        } else if (oldWeapon !== "") {
                            addWeapon(oldWeapon);
                            addItem(makeNarrator("You replace your " + oldWeapon + " with a " + weapon + "."));
                        }
                    } else if(weapon === oldWeapon){
                        addItem(makeNarrator("I don't think that's a weapon..."));
                    }
                    weaponListMaker();
                    addItem(makeNarrator(weaponList));
                    addItem(makeNarrator("What do you do?"));
                    addItem(makeOptions("(Take a weapon, Leave)"));
                    equipping = false;
                    
                }
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
        addItem(makeNarrator("Ok so you wake up in a white room."));
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
        addItem(makeNarrator("You find 2 hallways through the hole."));
    } else {
        addItem(makeNarrator("You return to where the other rooms meet."));
    }
    addItem(makeNarrator("There are two hallways on each side of you and the room you first came from."));
    addItem(makeNarrator("What will you do?"));
    addItem(makeOptions("(Left, Right, Back)"));
    visited2 = true;
    currentRoom = 2;
};
room3 = function() {
    if (visited3 === false){
        addItem(makeNarrator("You walk in and there is a large computer."));
    } else {
        addItem(makeNarrator("You are in the computer room."));
    }
    addItem(makeNarrator("What do you do?"));
    if (weapon === ""){
        addItem(makeOptions("(Examine, Exit)"));
    } else if (weapon !== "" && open === false){
        addItem(makeOptions("(Examine, Exit, Wreck the Computer)"));
    }
    currentRoom = 3;
    visited3 = true;
};
room4 = function() {
    if (visited4 === false){
        addItem(makeNarrator("You walk into a room full of weapons"));
    } else {
        addItem(makeNarrator("You are in the room full of weapons;"));
    }
    weaponListMaker();
    addItem(makeNarrator(weaponList));
    addItem(makeNarrator("What do you do?"));
    addItem(makeOptions("(Take a weapon, Leave)"));
    currentRoom = 4;
    visited4 = true;
};

weaponListMaker = function(){
    weaponList = "There is a";
    for (var i = 0; i != weapons.length - 1; i++){
        for (var j = 0; j != vowels.length - 1; j++){
            if(weapons[i].charAt(0) === vowels[j]){
                weaponList = weaponList + "n";
            }
        }
        
        weaponList = weaponList + " " + weapons[i] + ", a";
    }
    weaponList = weaponList + "nd a " + weapons[weapons.length - 1] + ".";
};
equipWeapon = function(request){
    var i = weapons.indexOf(request);
    if(i > -1) {
        weapon = request;
        weapons.splice(i, 1);
    }
};
addWeapon = function(request){
    weapons.push(request);
};



input = document.getElementById('input');    
output = document.getElementById('output');

input.onkeypress = continueIfEnter;
};
