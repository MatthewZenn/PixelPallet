var color1 = document.getElementById("col1");
var color2 = document.getElementById("col2");
var color3 = document.getElementById("col3");
var color4 = document.getElementById("col4");
var i = 0;
var huel = 0;
var k = 0;
var h1 = 20;
var h2 = 40;
var h3 = 60;
var h4 = 80;

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      r = parseInt(result[1], 16);
      g = parseInt(result[2], 16);
      b = parseInt(result[3], 16);
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if(max == min){
        h = s = 0; // achromatic
      }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
    var HSL = new Object();
    HSL['h']=h;
    HSL['s']=s;
    HSL['l']=l;
    return HSL;
  }

document.getElementById("hue").addEventListener("input", function() {
    huel = document.getElementById("hue").value;
});

 document.getElementById("brightness").addEventListener("input", function() {
    k = document.getElementById("brightness").value;
});

document.getElementById("gen").onclick = function() {generate()};

function generate() {
    i = document.getElementById("shift").value;

    if (document.getElementById("check").checked == true) {
      h1 = 50;
      h2 = 50;
      h3 = 50;
      h4 = 50;
    } else {
      h1 = 20;
      h2 = 40;
      h3 = 60;
      h4 = 80;
    }

    color4.style.backgroundColor = `hsl(${huel+(i*3)}, ${100-k}%, ${h1}%)`;
    color3.style.backgroundColor = `hsl(${huel+(i*2)}, ${100-k}%, ${h2}%)`;
    color2.style.backgroundColor = `hsl(${huel+(i*1)}, ${100-k}%, ${h3}%)`;
    color1.style.backgroundColor = `hsl(${huel+0}, ${100-k}%, ${h4}%)`;

    document.getElementById("square").style.backgroundColor = `hsl(${huel}, 100%, 50%)`;

    document.getElementById("code1").innerHTML = 'Hue: '+huel;
    document.getElementById("code2").innerHTML = 'Satuartion: '+(100-k)+'%';
    document.getElementById("code3").innerHTML = 'Hex: '+document.getElementById("square").style.backgroundColor;

    document.getElementById("c1").value = RGBToHex(color1.style.backgroundColor);
    document.getElementById("c2").value = RGBToHex(color2.style.backgroundColor);
    document.getElementById("c3").value = RGBToHex(color3.style.backgroundColor);
    document.getElementById("c4").value = RGBToHex(color4.style.backgroundColor);

    huel = Math.floor(Math.random() * (360));
}

