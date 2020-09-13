let nextBirthday = '12 Feb ' ;
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

function generateCurrentYear() {
    nextBirthday += new Date().getFullYear();
}

function checkTimeToBirthday() {
    const currentDate = new Date();
    let birthdayDate = new Date(nextBirthday);
    const totalSeconds = (birthdayDate - currentDate) / 1000;
    if (totalSeconds <= 0) {
        
        birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
        nextBirthday = new Date(birthdayDate);
    }
}

function formatTime(time) {
    return time < 10 ? (`0${time}`): time;
}

function countdown() {
  const birthdayDate = new Date(nextBirthday);
  const currentDate = new Date();

  const totalSeconds = (birthdayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
  document.title = `Birthday in (${formatTime(days)} days)`;
}

generateCurrentYear();
checkTimeToBirthday();
setInterval(countdown, 1000);
