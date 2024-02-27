const ball = document.getElementById("ball"); // get the ball

document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = 0; // set initial position

/*
handleKeyPress 
responds to certain key updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowUp") {
    position = position - 100;
  }
  if (e.code === "ArrowDown") {
    position = position + 100;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // reposition the ball
}

/*
refresh 
changes the position of the ball
*/
function refresh() {
  ball.style.top = position + "px";
}
