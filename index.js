
var x = true;

function changeHeader() {
  var name = document.getElementById("name");
  if (x) {
    name.style.transform = "translate(-37vw)";
    x = false;
  } else {
    name.style.transform = "translate(-37vw, 90vh)"
    x = true;
  }
}

function randomSpot(element) {
  var a = 100*Math.random()-50;
  var b = 100*Math.random();
  var name = document.getElementById(element);
  name.style.transform = "translate("+a+"vw,"+b+"vh)";
}
