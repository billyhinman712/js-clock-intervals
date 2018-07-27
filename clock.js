setInterval(function(){
    console.log("TICK!");
 }, 1000);

var degrees= 45;

var el = document.getElementById("hour");
el.style.transform = ("rotate" + degrees + "deg)";

