
/* function mouseOver1() {
  document.body.style.backgroundImage = "url('assets/home_calorie.png')";
  document.body.style.backgroundRepeat = 'no-repeat';
}

function mouseOut1() {
  document.body.style.backgroundImage = "none";
}

function mouseOver2() {
  document.body.style.backgroundImage = "url('assets/home_water_10.png')";
  document.body.style.backgroundRepeat = 'no-repeat';
}

function mouseOut2() {
  document.body.style.backgroundImage = "none";
} */

document.getElementById("Kalorienrechnerhintergrund").onmouseover = function() {
  document.getElementById("Kalorienrechnerhintergrundbild").style.opacity = "1";
}

document.getElementById("Kalorienrechnerhintergrund").onmouseout = function() {
  document.getElementById("Kalorienrechnerhintergrundbild").style.opacity = "0";
}




document.getElementById("Wasserrechnerhintergrund").onmouseover = function() {
  document.getElementById("Wasserrechnerhintergrundbild").style.opacity = "1";
}

document.getElementById("Wasserrechnerhintergrund").onmouseout = function() {
  document.getElementById("Wasserrechnerhintergrundbild").style.opacity = "0";
}