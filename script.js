// const app = document.getElementById('app');

function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}