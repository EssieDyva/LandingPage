// const app = document.getElementById('app');
// if (app) {
//   app.innerHTML = `<h1>Hello, World!</h1>`;

function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}