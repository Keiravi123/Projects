// simple console log to shiw JS is working 
console.log("Glimmung Aesthetic Room Ideas loaded 💜✨");


const likeButtons = document.querySelectorAll(".like-btn")
const favorites = document.getElementById("favorites")

likeButtons.forEach(button => {

button.addEventListener("click", function(){

const image = this.parentElement.querySelector("img")

const clone = image.cloneNode()

favorites.appendChild(clone)

}