const distance = Number(prompt("How many miles to your destination?"));
const speed = Number(prompt("What speed are you going? (mph)"));

const timeLeft = distance / speed;

const hoursLeft = Math.floor(timeLeft);
const percentageOfHourLeft = timeLeft - Math.floor(timeLeft);
const minutesLeft = 60 * percentageOfHourLeft;
// alert(percentageOfHourLeft);
// alert(minutesLeft);

alert(
  "You have " +
    hoursLeft +
    " hours and " +
    minutesLeft +
    " minutes left on your drive!",
);
