var color1 = document.getElementById("col1");
var color2 = document.getElementById("col2");
var color3 = document.getElementById("col3");
var color4 = document.getElementById("col4");
var i = 0;
var huel = 0;

document.getElementById("hue-shift").addEventListener("input", function(){
   i = document.getElementById("hue-shift").value;
});

document.getElementById("hue").addEventListener("input", function() {
    huel = document.getElementById("hue").value;
 });

document.getElementById("gen").onclick = function() {generate()};

function generate() {
    if (huel = 0) {
        huel = Math.floor(Math.random() * (360));

        color1.style.backgroundColor = `hsl(${huel+(i*3)}, 100%, 20%)`;
        color2.style.backgroundColor = `hsl(${huel+(i*2)}, 100%, 40%)`;
        color3.style.backgroundColor = `hsl(${huel+i}, 100%, 60%)`;
        color4.style.backgroundColor = `hsl(${huel}, 100%, 80%)`; 
    }
    else {
        color1.style.backgroundColor = `hsl(${huel+(i*3)}, 100%, 20%)`;
        color2.style.backgroundColor = `hsl(${huel+(i*2)}, 100%, 40%)`;
        color3.style.backgroundColor = `hsl(${huel+i}, 100%, 60%)`;
        color4.style.backgroundColor = `hsl(${huel}, 100%, 80%)`;
    }
}