var clientWidth = document.getElementById("body").clientWidth;
var clientHeight = document.getElementById("body").clientHeight;
var mainbody = document.getElementById("main-body");
var hit = document.getElementById("Hit");
var score = document.getElementById("Score");
var d_num = Math.floor(((clientHeight - 30) * clientWidth) / 3500);

let time = 10;
let hitn = "";
let s = 0;

function rngen() {
  return (randnum = Math.floor(Math.random() * 10));
}

const Timer = function () {
  let timer = document.getElementById("Time");
  const sttime = setInterval(() => {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(sttime);
      mainbody.innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
};
Timer();

const Hit = function () {
  rngen();
  hit.textContent = randnum;
  hitn = randnum;
};
Hit();


function createdot() {
  for (let index = 0; index < d_num + 2; index++) {
    mainbody.innerHTML += `<div id="dot" class="dot" id="Num">${rngen()}</div>`;
  }
}
createdot();

mainbody.addEventListener("click", (e) => {
  let a = Number(e.target.textContent);
  if (a === hitn) {
    ++s;
    time = 10;
    Hit();
    mainbody.innerHTML = "";
    createdot();
    score.textContent = s
  }
});
