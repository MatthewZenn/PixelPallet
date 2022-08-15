var color1 = document.getElementById("col1");
var color2 = document.getElementById("col2");
var color3 = document.getElementById("col3");
var color4 = document.getElementById("col4");
var i = 0;
var huel = 0;
var k = 0;

document.getElementById("hue").addEventListener("input", function() {
    huel = document.getElementById("hue").value;
});

 document.getElementById("brightness").addEventListener("input", function() {
    k = document.getElementById("brightness").value;
});

document.getElementById("gen").onclick = function() {generate()};

function generate() {
    i = document.getElementById("shift").value;

    color4.style.backgroundColor = `hsl(${huel+(i*3)}, ${100-k}%, 20%)`;
    color3.style.backgroundColor = `hsl(${huel+(i*2)}, ${100-k}%, 40%)`;
    color2.style.backgroundColor = `hsl(${huel+(i*1)}, ${100-k}%, 60%)`;
    color1.style.backgroundColor = `hsl(${huel}, ${100-k}%, 80%)`;

    document.getElementById("code1").innerHTML = 'Hue: '+huel;
    document.getElementById("code2").innerHTML = 'Satuartion: '+(100-k)+'%';
    document.getElementById("code3").innerHTML = 'Hex: '+i;
    huel = Math.floor(Math.random() * (360));
}