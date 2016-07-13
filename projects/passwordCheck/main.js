window.onload = function() { //This makes the list from the input
    var input = document.getElementById('input');
    var reply = document.getElementById('reply');
    input.addEventListener('keyup', function (e) {
        //var key = e.which || e.keyCode;
        if ((input.value).length === 0) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "Having no password would be better than having one of yours";
        } else if ((input.value).length === 1) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "One character isn't long enough, honey...";
        } else if ((input.value).length < 3) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "My dog could do better than you";
        } else if ((input.value).length < 5) { // 13 is enter
            reply.innerHTML = "Who let you use a computer?";
        } else if ((input.value).length < 9) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "It's ok if you aren't smart enough to use a good password";
        } else if ((input.value).length < 14) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "People like you shouldn't be using computers";
        } else if ((input.value).length < 20) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "If I say anything else, it'd be a compliment";
        } else if ((input.value).length < 30) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "You tried I guess...";
        } else if ((input.value).length < 40) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "Who are you trying to impress?";
        } else if ((input.value).length < 60) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "Acceptable";
        } else if ((input.value).length > 99) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "I knew someone would try";
        } else if ((input.value).length < 150) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "Stop. We're done here. Go Home";
        } else if ((input.value).length < 175) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "I haven't even coded anything here. Go away.";
        } else if ((input.value).length < 205) { // 13 is enter
        //input has value, div has innerHTML
            reply.innerHTML = "This is the end. Like the actual end. Please leave";
        } 
    });
};