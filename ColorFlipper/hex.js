const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.getElementsByClassName('color')

btn.addEventListener('click', function ()
{
    let hexColor = '#'

    for (i = 0; i < 6; i++)
    {
        let item = Math.floor(Math.random * hex.length)
        hexColor += hex[item]
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})