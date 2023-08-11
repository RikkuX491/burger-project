const burgerList = document.getElementById('burger-list')

function addBurgerToList(burger){
    const li = document.createElement('li')
    li.textContent = burger.name
    burgerList.appendChild(li)
}

fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgers => {
    burgers.forEach(burger => {
        addBurgerToList(burger)
    })
})