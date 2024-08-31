var constantTimerVal = 60;
var score = 0;
var hitNum = 0;

function newBubbleFormation() {
  var clutter = "";
  for (var i = 0; i < 154; i++) {
    var newBubble = Math.floor(Math.random() * 10);
    clutter += `<div class="content">${newBubble}</div>`;
  }

  document.querySelector(".hero").innerHTML = clutter;
}

function clockTimer() {
  var newTimer = setInterval(function () {
    if (constantTimerVal > 0) {
      constantTimerVal--;
      document.querySelector("#timer").textContent = constantTimerVal;
    } else {
      clearInterval(constantTimerVal);
      document.querySelector(".hero").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}

function randomHit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitNum;
}

function scoreGenerator() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector(".hero").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitNum) {
    scoreGenerator();
    newBubbleFormation();
    randomHit();
  }
});

newBubbleFormation();
clockTimer();
randomHit();
// scoreGenerator();
