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
let tempDate = new Date()

let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const year = futureDate.getFullYear()
const month = futureDate.getUTCMonth()
const day = futureDate.getDay()
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${months[month]} ${year} `

// A statement that converts future date to milliseconds
const futureTime = futureDate.getTime()


function getRemainingTime(time)
{
  let currentTime = new Date().getTime()
  timeDiff = time - currentTime

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000

  let days = Math.floor(timeDiff / oneDay)
  let hours = Math.floor((timeDiff % oneDay) / oneHour)
  let minutes = Math.floor((timeDiff % oneHour) / oneMinute)
  let seconds = Math.floor((timeDiff % oneMinute) / oneSecond)

  // console.log(days, hours, minutes, seconds)
  // Setting the values array
  const values = [days, hours, minutes, seconds]

  function format(item)
  {
    if (item < 10)
    {
      return item = `0${item}`
    }

    return item
  }

  items.forEach(function (item, index)
  {
    item.textContent = format(values[index])
  })

  if (timeDiff < 0)
  {
    clearInterval()
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }
}

setInterval(() =>
{
  getRemainingTime(futureDate)
}, 1000);