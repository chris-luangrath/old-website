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
    
var input, output, addItem,  makeReply, makeNarrator, makeOptions;
var addNarrator, addOptions;
var continueIfEnter, printStory0;
var weaponListMaker, equipWeapon, addWeapon;
var room1, room2, room3, room4, robotBattle;
var visited1 = false, visited2 = false, visited3 = false, visited4 = false;
var began = false, end = false, open = false, equipping = false, fought = false, timer = 0, weapon = "", oldWeapon = "";
var vowels = ["a", "e", "i", "o", "u"];
var reply = "";
var status = 1;
var weapons =["sword", "hammer", "axe", "chainsaw", "shovel"];
var weaponList = "";
var extraHit = false
//var focus = window.getElementById('focus');

addItem = function(x) {
        output.appendChild(x);
        var br = document.createElement("br");
        output.appendChild(br);
    };
addNarrator = function(text){
    addItem(makeNarrator(text));
};
addOptions = function(text) {
    addItem(makeOptions(text));
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
            addNarrator("IF YOU AREN'T READY, WHY ARE YOU HERE?");
            addNarrator("If your goal was to be a loser, you achieved that");
            end = true;
        } else {
            addNarrator("Choose an option from the Parentheses");
            addNarrator("Are you ready to escape the Building?");
            addOptions("(Yes, No)");
        }
    } else if (began == true){
        switch (status) {
            case 1:
                if (reply === "examine") {
                    addNarrator("There's nothing but the door and the hole in the wall.");
                    addNarrator("What do you do?");
                    addOptions("(Examine, Go through door, Go through hole, Wait)");
                    timer++;
                } else if (reply === "go through door") {
                    if (open === false) {
                        addNarrator("The door is locked.");
                        addNarrator("What do you do?");
                        addOptions("(Examine, Go through door, Go through hole, Wait)");
                        timer++;
                    } else if (open === true) {
                        addNarrator("You did it in " + timer + " turns! Good Job!");
                        addNarrator("Maybe someday I'll make the game longer...");
                        addNarrator("This really was just a test of my coding abilities.");
                        addNarrator("Thank you for visiting my site and checking out my stuff!");
                        addNarrator("It really means a lot!");
                    }
                    
                } else if (reply === "go through hole") {
                    timer++;
                    room2();
                } else if (reply === "wait") {
                    addNarrator("You sit down and wait. Congratulations");
                    addNarrator("What do you do?");
                    addOptions("(Examine, Go through door, Go through hole, Wait)");
                    timer++;
                } else {
                    addNarrator("Choose an option from the Parentheses");
                    addOptions("(Examine, Go through door, Go through hole, Wait)");
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
                    addNarrator("Choose an option from the Parentheses");
                    addOptions("(Left, Right, Back)");
                    break;
                }
                break;
            case 3:
                if (reply === "examine") {
                    if (open === false){
                    addNarrator("Upon further inspection, you realize this computer controls the entire building.");
                    addNarrator("However, its controls seem too complicated for you to understand");
                    } else {
                        addNarrator("Upon further inspection, you realize this computer controls is thoroughly wrecked");
                        addNarrator("The alarms are pretty loud. You should probably go");
                    }
                    timer++;
                } else if (reply === "leave") {
                    timer++;
                    room2();
                    break;
                } else if (reply === "wreck the computer") {
                    if (weapon !== null){
                        addNarrator("Using your " + weapon + ", you wreck the computer a ton.");
                        addNarrator("The building's system is now down.");
                        addNarrator("Despite this, an alarm starts to blare.");
                        addNarrator("Don't think about it too much.");
                        open = true;
                    } else {
                        addNarrator("Ok, I'm guessing you've played the game already");
                        addNarrator("Since you don't have a weapon, this shouldn't be an option");
                        addNarrator("Y u tryna cheat, man?");
                        window.location = "https://youtu.be/dQw4w9WgXcQ";
                    }
                }
                addNarrator("What do you do?");
                if (weapon === ""){
                    addOptions("(Examine, Leave)");
                } else {
                    addNarrator("Choose an option from the Parentheses");
                    if (weapon !== "" && open === false){
                        addOptions("(Examine, Wreck the Computer, Leave )");
                    }
                    else {
                        addOptions("(Examine, Leave )");
                    }
                }
                break;
            case 4:
                if (equipping === false) {
                    if (reply === "take a weapon") {
                        weaponListMaker();
                        addNarrator("What weapon will you take?");
                        addOptions(weaponList);
                        equipping = true;
                        timer++;
                    } else if (reply === "leave") {
                        timer++;
                        room2();
                    }  else {
                        addNarrator("Choose an option from the Parentheses");
                        addNarrator("What do you do?");
                        addOptions("(Take a weapon, Leave)");
                        timer++;
                        break;
                    }
                } else if (equipping === true) {
                    oldWeapon = weapon;
                    equipWeapon(reply);
                    if(weapon !== oldWeapon){
                        if (oldWeapon === ""){
                            addNarrator("You equipped the " + weapon + ".");
                        } else if (oldWeapon !== "") {
                            addWeapon(oldWeapon);
                            addNarrator("You replace your " + oldWeapon + " with a " + weapon + ".");
                        }
                    } else if(weapon === oldWeapon){
                        addNarrator("I don't think that's a weapon...");
                        addNarrator("Choose an option from the Parentheses");
                    }
                    weaponListMaker();
                    addNarrator(weaponList);
                    addNarrator("What do you do?");
                    addOptions("(Take a weapon, Leave)");
                    equipping = false;
                    
                }
                break;
            case "talking":
                if(reply === "1"){
                    addNarrator("The robot says, \"I disagree\".");
                    addNarrator("You are now initiated in battle!");
                    robotBattle();
                } else if(reply === "2"){
                    addNarrator("The robot says, \"You're not going anywhere.\"");
                    addNarrator("You are now initiated in battle!");
                    robotBattle();
                } else if(reply === "3"){
                    addNarrator("The robot says, \"Don't ask.\"");
                    addNarrator("You are now initiated in battle!");
                    robotBattle();
                } else if (reply === "4"){
                    addNarrator("You charge at the robot. You get a free hit");
                    addNarrator("You are now initiated in battle!");
                    extraHit = true;
                    robotBattle();
                } else {
                    addNarrator("Choose an option from the Parentheses");
                    addOptions("1. Say \"Yes I am!\"");
                    addOptions("2. Say \"Dang it\"");
                    addOptions("3. Say \"Why not?\"");
                    addOptions("4. Charge with your " + weapon);
                    addOptions("(1, 2, 3, 4");
                }
                break;
            case "battle":
                robotBattle();
                break;
        }
    } else {
        addNarrator("You broke the game. I'm not sure how you did it, but you did.");
        addNarrator("You're a hacker now. You bested me and the system. Good for you.");
        addNarrator("You win I guess");
        end = true;
    }
    
};

room1 = function() {
    
    if (open === true && fought === false){
        addNarrator("You run into the white room, but there is now a robot blocking the door.");
        addNarrator("The robot says, \"You're not escaping\"");
        addNarrator("What do you do in return? (Choose a Number)");
        addOptions("1. Say \"Yes I am!\"");
        addOptions("2. Say \"Dang it\"");
        addOptions("3. Say \"Why not?\"");
        addOptions("4. Charge with your " + weapon);
        addOptions("(1, 2, 3, 4)");
        status = "talking";
    } else {
        if (visited1 === false){
            addNarrator("Ok so you wake up in a white room.");
        } else {
            addNarrator("You are in the white room.");
        }
        addNarrator("There's nothing in it but a metal door and a hole opposite of the door.");
        addNarrator("The hole is large enough to enter");
        addNarrator("What do you do?");
        addOptions("(Examine, Go through door, Go through hole, Wait)");
        status = 1;
        visited1 = true;
    }
    
    
};
room2 = function() {
    if (visited2 === false){
        addNarrator("You find 2 hallways through the hole.");
    } else {
        addNarrator("You return to where the other rooms meet.");
    }
    addNarrator("There are two hallways on each side of you and the room you first came from.");
    addNarrator("What will you do?");
    addOptions("(Left, Right, Back)");
    visited2 = true;
    status = 2;
};
room3 = function() {
    if (visited3 === false){
        addNarrator("You walk in and there is a large computer.");
    } else {
        addNarrator("You are in the computer room.");
    }
    addNarrator("What do you do?");
    if (weapon === ""){
        addOptions("(Examine, leave)");
    } else if (weapon !== "" && open === false){
        addOptions("(Examine, Wreck the Computer, Leave )");
    }
    status = 3;
    visited3 = true;
};
room4 = function() {
    if (visited4 === false){
        addNarrator("You walk into a room full of weapons");
    } else {
        addNarrator("You are in the room full of weapons;");
    }
    weaponListMaker();
    addNarrator(weaponList);
    addNarrator("What do you do?");
    addOptions("(Take a weapon, Leave)");
    status = 4;
    visited4 = true;
};

var HP = 100, robotHP = 200;
var chance, attack, check, damage, d20;
var weaponCheck;
weaponCheck = function(){
    switch (weapon) {
        case "sword":
            attack = 16;
            chance = 19;
            break;
        case "hammer":
            attack = 17;
            chance = 14;
            break;
        case "axe":
            attack = 18;
            chance = 13;
            break;
        case "chainsaw":
            attack = 22;
            chance = 15;
            break;
        case "shovel":
            attack = 18;
            chance = 18;
    }
};
d20 = function(){
    return Math.floor((Math.random() * 20) + 1);
};
check = function(){
    return (d20() + chance)/2;
};

robotBattle = function(){
    status = "battle";
    addNarrator("Your Health: " + HP);
    addNarrator("Robot's Health: " + robotHP);
    weaponCheck();
    if (extraHit == true){
        damage = d20() + attack;
        
        addNarrator("You get a surprise attack on the robot for " + damage + " HP");
        robotHP = robotHP - damage;
        extraHit = false;
    }
    if (d20() === 20) {
        
    } else if (check() > d20()){
        damage = d20() + attack;
        addNarrator("You attack the robot for " + damage + "HP");
    } else {
        addNarrator("You tried to attack the robot but you failed.");
        damage = 10;
        HP = HP - damage;
        addNarrator("Instead, the robot bops you on the head for " + damage + " HP");
        addNarrator("Attack Again");
        addOptions("(Attack)");
    }
    if (robotHP <= 0){
        fought = true;
        addNarrator("You land the final blow and the robot falls apart.");
        addNarrator("You get 50 XP.");
        room1();
    }
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
