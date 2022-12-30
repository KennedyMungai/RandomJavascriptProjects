// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false
let editId = ''
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)
window.addEventListener('DOMContentLoaded', setupItems)
// ****** FUNCTIONS **********
function addItem(e)
{
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()

    if (value && !editFlag)
    {
        createListItem(id, value)
        // display alert
        displayAlert("item added to the list", "success")

        // show container
        container.classList.add('show-container')

        //add to local storage
        addToLocalStorage(id, value)

        // set back to default
        setBackToDefault()
    }
    else if (value && editFlag)
    {
        editElement.textContent = value
        displayAlert('value changed', 'success')
        // edit local storage
        editLocalStorage(editId, value)
        setBackToDefault()
    }
    else
    {
        displayAlert("please enter a value", "danger")
    }
}

// display alert
function displayAlert(text, action)
{
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(() =>
    {
        alert.classList.remove(`alert-${action}`)
        alert.textContent = ''
    }, 1000);
}

// set back to default
function setBackToDefault()
{
    grocery.value = ''
    editFlag = false
    editId = ''
    submitBtn.textContent = 'submit'
}

//clear list 
function clearItems()
{
    const items = document.querySelectorAll('.grocery-item')

    if (items.length > 0)
    {
        items.forEach(function (item)
        {
            list.removeChild(item)
        })
    }

    container.classList.remove('show-container')
    displayAlert("empty list", "danger")
    setBackToDefault()
    localStorage.removeItem('list')
}

// edit function
function editItem(e)
{
    // console.log('edit item')
    const element = e.currentTarget.parentElement.parentElement

    // set the edit item
    editElement = e.currentTarget.parentElement.previousElementSibling

    // set form value
    grocery.value = editElement.textContent
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = 'edit'
}
// delete function
function deleteItem(e)
{
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id

    list.removeChild(element)

    if (list.children.length === 0)
    {
        container.classList.remove('show-container')
    }

    displayAlert("item removed", "danger")
    setBackToDefault()
    // remove from local storage
    removeFromLocalStorage(id)
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value)
{
    const grocery = { id, value }
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items))
}

function removeFromLocalStorage(id)
{
    let items = getLocalStorage()

    items = items.filter(function (item)
    {
        if (item.id !== id)
        {
            return item
        }
    })

    localStorage.setItem('list', JSON.stringify(items))
}

function editLocalStorage(id, value)
{
    let items = getLocalStorage()
    items = items.map(function (item)
    {
        if (item.id === id)
        {
            item.value = value
        }

        return item
    })

    localStorage.setItem('list', JSON.stringify(items))
}

function getLocalStorage()
{
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}
// ****** SETUP ITEMS **********
function setupItems()
{
    let items = getLocalStorage()

    if (items.length > 0)
    {
        items.forEach(function (item)
        {
            createListItem(item.id, item.value)
        })

        container.classList.add('show-container')
    }
}

function createListItem(id, value)
{
    const element = document.createElement('article')

    // add class
    element.classList.add('grocery-item')

    // add id
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `

    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')

    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)

    // append child
    list.appendChild(element)

}