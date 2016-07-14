var counter = 0;
window.onload = function() { //This makes the list from the input
    "use strict";
    var
    input, addItemIfEnter, addItem, list, makeItem, compItem, delItem, changeFooter, all, active, completed, showNum, findHide, findNum;
    var mode = "all";
    addItem = function(x) {
        list.appendChild(x);
    };
    addItemIfEnter = function(e) {
        if (e.which === 13 && input.value !== "") {
            addItem(makeItem());
            counter++;
            changeFooter();
            input.value = "";
        }
    };
    makeItem = function() {
        var newItem = document.createElement("li");
        newItem.id = "listItem" + counter;
        newItem.className = "show";
        
        var completeButton = document.createElement("input");
        completeButton.setAttribute("type", "checkbox");
        completeButton.id = "complete" + counter;
        completeButton.className = "complete";
        completeButton.onclick = function(count){
            //immediatly invoked function expression
            return function(){compItem(count);};
        }(counter);
        
        var todotext = document.createTextNode(input.value);
        
        var deleteButton = document.createElement("button");
        deleteButton.id = "delete" + counter;
        deleteButton.className = "delete";
        deleteButton.onclick = function(count){
            //immedietly invoked function expression
            return function(){delItem(count);};
        }(counter);
        newItem.appendChild(completeButton);
        newItem.appendChild(todotext);
        newItem.appendChild(deleteButton);
        return newItem;
    };
    
    compItem = function(count){
        var text = document.getElementById("listItem" + count);
        var check = document.getElementById("complete" + count);
        if (check.checked === true){
            text.className = "comp show";
        } else {
            text.className = "show";
        }
        changeFooter();
    };
    
    delItem = function(count){
        var text = document.getElementById("listItem" + count);
        text.remove();
        counter--;
        changeFooter();
    };
    
    changeFooter = function(){
        var num = findNum();
        var footer= document.getElementById('amount');
            var left;
            if (num === 1){
                left = " item left";
            } else {
                left = " items left";
            }
            footer.innerHTML = num + left;
    };
    
    findNum = function(){
        var num = counter;
        if (mode === "all") {
            for (var i = 0; i != counter; i++){
            
            var text = document.getElementById("listItem" + i);
            if (text.className === "hide"){
                text.className = "show";
            } else if (text.className === "comp show") {
                num--;
            } else if (text.className === "comp hide"){
                text.className = "comp show";
                num--;
            }
        }
        } else if (mode === "active"){
            for (var i = 0; i != counter; i++){
                var text = document.getElementById("listItem" + i);
                if (text.className === "hide"){
                    
                    text.className = "show";
                 
                } else if (text.className === "comp show" || text.className === "comp hide"){
                    text.className = "comp hide";
                    num--;
                }
            }
        } else if (mode === "completed") {
            for (var i = 0; i != counter; i++){
                var text = document.getElementById("listItem" + i);
                if (text.className === "show" || text.className === "hide"){
                    text.className = "hide";
                    //num--; since it's just the completed ones, it will always return 0
                } else if (text.className === "comp hide"){
                    text.className = "comp show";
                }
            }
            num = 0;
        }
        return num;
    };
    
    document.getElementById("all").onclick = function(){
        mode = "all";
        changeFooter();
    };
    
    document.getElementById("active").onclick = function(){
        mode = "active";
        changeFooter();
    };
    
    document.getElementById("completed").onclick = function(){
        mode = "completed";
        changeFooter();
    };
    
    document.getElementById("clear").onclick = function(){
        for (var i = 0; i != counter; i++){
            var text = document.getElementById("listItem" + i);
            if (text.className === "comp show" && text.className === "comp hide"){
                text.remove();
            }
        }
    };
    
    input = document.body.getElementsByClassName("todo-input")[0];
    input.onkeypress = addItemIfEnter;
    list = document.body.getElementsByClassName("list")[0];

};







/*
//This activates when an enter
window.onload=function(){
    document.getElementById('todo').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            var input= document.getElementById('list');
            input.innerHTML = document.getElementById('todo').value;
        }
    });
};
*/