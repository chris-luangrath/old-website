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
    
var input, output, addItem, continueIfEnter, makeReply, makeNarrator, makeOptions, addStory, printStory;
var began = false, end = false;
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

continueIfEnter = function(e) {
        if (e.which === 13 && input.value !== "" && end === false) {
            reply = (input.value).toLowerCase();
            addItem(makeReply(reply));
            //continue with story
            printStory();
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
printStory = function() {

    if (began === false){
        if (reply === "yes"){
            addItem(makeNarrator("The year is 20ZZ. Zombies exist now. It's kinda scary"));
            addItem(makeNarrator("You are walking down the street when suddenly, you see a zombie walking towards you!"));
            addItem(makeNarrator("You can: walk the other way, strike up a conversation, or punch him in the schnozz."));
            addStory(makeNarrator("What will you do: walk, talk, or fight?"),makeOptions("(walk, talk, fight)"));
            began = true;
        } else if (reply === "no"){
            addItem(makeNarrator("IF YOU AREN'T READY, WHY ARE YOU HERE?"));
            addItem(makeNarrator("If your goal was to be a loser, you achieved that"));
            end = true;
        } else {
            addItem(makeNarrator("Choose an option from the options"));
            addStory(makeNarrator("This is the first text-based adventure on the site. Are you ready?"),makeOptions("(Yes, No)"));
        }
    } else if (began === true){
        if (reply == "walk") {
                addItem(makeNarrator("Lucky for you, zombies can't walk fast."));
                addItem(makeNarrator("You hastily speed walk away from danger and you live another day. You Win!"));
                addItem(makeNarrator("You Win!"));
                end = true;
            } else if (reply == "talk") {
                addItem(makeNarrator("You stop what you're doing and start talking to the zombie."));
                addItem(makeNarrator("It turns out, zombies don't eat brains. It was just a racial stereotype that early Americans created."));
                addItem(makeNarrator("It also turns out that the zombie's name is Tom, and he wants to be a software engineer. Good for him. Good for you. You Win."));
                addItem(makeNarrator("Good for him. Good for you. You Win."));
                end = true;
            } else if (reply == "fight") {
                addItem(makeNarrator("You feel a surge of adrenalin as you stop walking towards the zombie."));
                addItem(makeNarrator("You will your hand to burst into flames and you run towards the zombie and deck him in the face."));
                addItem(makeNarrator("He falls down and starts to cry about \"How much it hurts\" and \"how he has a family\"."));
                addItem(makeNarrator("Soon, the zombie is no more. You Win?"));
                end = true;
            } else if (reply == "walk, talk, or fight") {
                addItem(makeNarrator("OH YOU THINK YOU'RE SOO CLEVER, EH BOY?"));
                end = true;
            } else {
                addItem(makeNarrator("type walk, talk, or fight. Lets try again."));
            }
    } else {
        addItem(makeNarrator("You broke the game. I'm not sure how you did it, but you did."));
        addItem(makeNarrator("You're a hacker now. You bested me and the system. Good for you."));
        addItem(makeNarrator("You win I guess"));
        end = true;
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
