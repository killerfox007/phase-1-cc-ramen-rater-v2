// Global Vars


const baseUrl = "http://localhost:3000/"
let ramenMenu = []
const menu = document.getElementById("ramen-menu")
const sumbitBtn = document.getElementById('submit-button')

// Event listeners
document.addEventListener("DOMContentLoaded",function(){
   displayRamens()
//   settingBackground()
})

menu.addEventListener('click', handleClick)

// sumbitBtn.addEventListener('submit', addSubmitListener)



// Callbacks
function handleClick(event) {
console.log(ramenMenu)
    console.log(event)

    let idOfBowl = ramenMenu.find(theRamen => theRamen.id=== event.target.id).id
    let result = ramenMenu.filter(theMenu => theMenu.id === idOfBowl)

document.getElementsByClassName("name")[0].textContent = result[0].name
document.getElementsByClassName("restaurant")[0].textContent = result[0].restaurant
document.getElementsByClassName("detail-image")[0].src = result[0].image
document.getElementById('rating-display').textContent = result[0].rating
document.getElementById("comment-display").textContent = result[0].comment

}

const addSubmitListener = () => {


}

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
