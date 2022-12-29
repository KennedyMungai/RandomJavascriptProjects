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

let futureDate = new Date(2023, 0, 15, 8, 34, 00);

const year = futureDate.getFullYear()
const month = futureDate.getUTCMonth()
const day = futureDate.getDay()
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${months[month]} ${year} `

// A statement that converts future date to milliseconds
const futureTime = futureDate.getTime()