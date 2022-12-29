const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

// console.log(items)

let futureDate = new Date();
// console.log(futureDate)
const year = futureDate.getFullYear()
const month = futureDate.getUTCMonth()
const day = futureDate.getDay()
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

giveaway.textContent = `giveaway ends on ${year} ${months[month]} ${day}`