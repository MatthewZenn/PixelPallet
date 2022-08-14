var color1 = document.getElementById("col1");
var color2 = document.getElementById("col2");
var color3 = document.getElementById("col3");
var color4 = document.getElementById("col4");

document.getElementById("gen").onclick = function() {generate()};

function generate() {
    var value = "0"
    var value = Math.floor(Math.random() * (255 - 0) + 0);
    
    color1.style.backgroundColor = `hsl(${value}, 100%, 20%)`;
    color2.style.backgroundColor = `hsl(${value}, 100%, 40%)`;
    color3.style.backgroundColor = `hsl(${value}, 100%, 60%)`;
    color4.style.backgroundColor = `hsl(${value}, 100%, 80%)`;
}