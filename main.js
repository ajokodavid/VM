let n = 0
let txt = "Click on the button to start game.";
let speed = 200;
function anime() {
    if(n < txt.length) {
        document.getElementById("stylos").innerHTML += txt.charAt(n);
        n++;
        setTimeout(anime, speed);
}
}

let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setInterval("timedCount()",2);
}

timedCount();

let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("main.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

// function stopWorker() {
//     w.terminate();
//     w = undefined;
//   }