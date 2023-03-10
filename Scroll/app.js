// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date')
let currentDate = new Date()

date.textContent = currentDate.getFullYear().toString()
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

navToggle.addEventListener('click', function ()
{
    // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height
    // console.log(containerHeight)
    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)

    if (containerHeight === 0)
    {
        linksContainer.style.height = `${linksHeight}px`
    }
    else
    {
        linksContainer.style.height = 0;
    }
})
// ********** fixed navbar ************
window.addEventListener('scroll', function ()
{
    // console.log(scrollY)
    if (scrollY >= linksContainer.getBoundingClientRect().height)
    {
        navbar.classList.add('fixed-nav')
    }
    else
    {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollY >= this.document.getElementById('home').getBoundingClientRect().height)
    {
        topLink.classList.add('show-link')
    }
    else
    {
        topLink.classList.remove('show-link')
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach(function (link)
{
    link.addEventListener('click', function (e)
    {
        // prevents the default behaviour
        e.preventDefault()

        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        // console.log(id)

        const element = document.getElementById(id)

        // Calculating the heights
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')

        let position = element.offsetTop - navHeight - 20
        // console.log(position)

        if (!fixedNav)
        {
            position = position - navHeight - 20
        }

        if (navHeight > 82)
        {
            position += containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position
        })

        linksContainer.style.height = 0
    })
})