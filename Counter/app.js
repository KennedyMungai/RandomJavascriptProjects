let count = 0

const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach(function (btn)
{
    if (btn.classList.contains('increase'))
    {
        btn.addEventListener('click', function ()
        {
            count++
        })

    }
    else if (btn.classList.contains('decrease'))
    {
        btn.addEventListener('click', function ()
        {
            count--
        })
    }
    else if (btn.classList.contains('reset'))
    {
        btn.addEventListener('click', function ()
        {
            count = 0
        })
    }
    else
    {
        return;
    }
})