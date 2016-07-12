window.onload = function() { //This makes the list from the input
    var input = document.getElementById('input');
    var reply = document.getElementById('reply');
    input.addEventListener('keydown', function (e) {
        var key = e.which || e.keyCode;
        if ((input.value).length < 2) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "My dog could do better";
        } else if ((input.value).length < 2) { // 13 is enter
            reply.innerHTML = "My dog could do better";
        } else if ((input.value).length < 2) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "My dog could do better";
        }
    });
};