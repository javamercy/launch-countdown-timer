const day_el = document.querySelector(".day");
const hour_el = document.querySelector(".hour");
const munite_el = document.querySelector(".munite");
const second_el = document.querySelector(".second");
let counter = 0;

getremaningTimes();

function getremaningTimes() {
  const date = new Date(2022, 5, 18, 10, 15, 0, 0);
  console.log(date);
  const miliseconds = date - new Date();

  let seconds = Math.floor(miliseconds / 1000);

  let days = Math.floor(seconds / (3600 * 24));
  days < 10 ? (days = "0" + days) : "";

  seconds = seconds % (3600 * 24);

  let hours = Math.floor(seconds / 3600);
  hours < 10 ? (hours = "0" + hours) : "";

  seconds = seconds % 3600;

  let munites = Math.floor(seconds / 60);
  munites < 10 ? (munites = "0" + munites) : "";

  seconds = seconds % 60;
  seconds < 10 ? (seconds = "0" + seconds) : "";

  day_el.textContent = days;
  hour_el.textContent = hours;
  munite_el.textContent = munites;
  second_el.textContent = seconds;

  changeSecondColor(seconds);
}

function changeSecondColor(seconds) {
  const color = `hsl(${seconds * 6},100%,50%)`;

  second_el.style.color = color;

  counter += 6;
}

setInterval(getremaningTimes, 1000);
