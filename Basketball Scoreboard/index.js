let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

function addOneH() {
  homeCount += 1;
  homeScore.textContent = homeCount;
}
function addOneG() {
  guestCount += 1;
  guestScore.textContent = guestCount;
}
function addTwoH() {
  homeCount += 2;
  homeScore.textContent = homeCount;
}
function addTwoG() {
  guestCount += 2;
  guestScore.textContent = guestCount;
}
function addThreeH() {
  homeCount += 3;
  homeScore.textContent = homeCount;
}
function addThreeG() {
  guestCount += 3;
  guestScore.textContent = guestCount;
}
function resetCount() {
  homeCount = 0;
  guestCount = 0;
  homeScore.textContent = homeCount;
  guestScore.textContent = guestCount;
}
