// Global Vars



const baseUrl = "http://localhost:3000/"
let ramenMenu = []
const menu = document.getElementById("ramen-menu")
const form = document.getElementById("new-ramen")
let idOFAddedRamens = "5"
// Event listeners
document.addEventListener("DOMContentLoaded",function(){
main()
})
menu.addEventListener('click', handleClick)

// Callbacks
function handleClick(event) {
    console.log(event.target.id)
    console.log(ramenMenu)
    let idOfBowl = ramenMenu.find(theRamen => theRamen.id == event.target.id).id
    console.log(idOfBowl)
    let result = ramenMenu.filter(theMenu => theMenu.id === idOfBowl)

document.getElementsByClassName("name")[0].textContent = result[0].name
document.getElementsByClassName("restaurant")[0].textContent = result[0].restaurant
document.getElementsByClassName("detail-image")[0].src = result[0].image
document.getElementById('rating-display').textContent = result[0].rating
document.getElementById("comment-display").textContent = result[0].comment

}

const addSubmitListener = (event) => {
    event.preventDefault()

    
const nameInput = form.querySelector('#new-name').value
const restInput = form.querySelector('#new-restaurant').value
const imgInput = form.querySelector('#new-image').value
const ratingInput = form.querySelector('#new-rating').value
const commentInput = form.querySelector('#new-comment').value
parseInt(idOFAddedRamens++)
const allToghether = {
    id: idOFAddedRamens,
    name: nameInput,
    restaurant: restInput,
    image: imgInput,
    rating: ratingInput,
    comment: commentInput
}

ramenMenu.push(allToghether)
renderRamens(allToghether)
}
form.addEventListener('submit', addSubmitListener)

async function displayRamens() {
    await fetch(baseUrl + "ramens")
    .then(resp => resp.json())
    .then(data => {
        ramenMenu = data
        ramenMenu.forEach(picOfRamen => {
        let img = document.createElement('img')
        img.src = picOfRamen.image
        img.id = picOfRamen.id
        document.getElementById("ramen-menu").appendChild(img)
    })
    
document.getElementsByClassName("name")[0].textContent = ramenMenu[0].name
document.getElementsByClassName("restaurant")[0].textContent = ramenMenu[0].restaurant
document.getElementsByClassName("detail-image")[0].src = ramenMenu[0].image
document.getElementById('rating-display').textContent = ramenMenu[0].rating
document.getElementById("comment-display").textContent = ramenMenu[0].comment

})
.catch(error => {
    console.log('adding this for potetional extra points!', error)
})
}

function renderRamens(e){
console.log(e)
console.log(e.image)
console.log(ramenMenu)
let img = document.createElement('img')
img.src = e.image
img.id = e.id
const div = document.getElementById("ramen-menu").appendChild(img)
console.log(img)
console.log(img.id)
} 

function main(){
    displayRamens()
    addSubmitListener()
}
