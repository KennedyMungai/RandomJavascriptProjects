// const question = document.querySelectorAll('.question')
// const buttons = document.querySelectorAll('.question-btn')

// buttons.forEach(function (btn)
// {
//     btn.addEventListener('click', function (e)
//     {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })


const questions = document.querySelectorAll('.question')

questions.forEach(function (question)
{
    // console.log(question, querySelector)
    const btn = question.querySelector('.question-btn')
    // console.log(btn)
    btn.addEventListener('click', function ()
    {
        questions.forEach(function (item)
        {
            // console.log(item)
            if (item !== question)
            {
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})  