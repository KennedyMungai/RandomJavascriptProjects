const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const page = document.querySelector('.container')

btn.addEventListener('click', function ()
{
    colorIndex = Math.floor(Math.random() * colors.length - 1)
    main.style.backgroundColor = colors[colorIndex]
})