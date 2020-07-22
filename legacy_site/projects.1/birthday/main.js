window.onload = function() { //This makes the list from the input
    var text = document.getElementById("text");
    var today = new Date().toJSON().slice(0,10);
    console.log(today);
    var array = today.split("-");
    var month = array[1];
    console.log(month);
    var day = array[2];
    console.log(day);
    if (day == 15 && month == 01) {
        text.innerHTML = "Yep";
        console.log("yep");
    } else {
        text.innerHTML = "Nope";
        console.log("nope");
    }
};