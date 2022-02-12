// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0

// TODO: Create any elements we need
// accessing the div for all elements of the game
let game = document.querySelector('#game')
//creating img element and appending to page
let penny = document.createElement('img')
penny.src = './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny-image')
game.append(penny)

// creating div with order for controls
let controls = document.createElement('div')
controls.setAttribute('class', 'controls')
game.append(controls)

// Creating flip button
let flip = document.createElement('button')
flip.setAttribute('id', 'flip')
flip.textContent = 'Flip The Penny!'
controls.append(flip)

// creating clear button
let clear = document.createElement('button')
clear.setAttribute('id', 'clear')
clear.textContent = 'Clear Scoreboard'
controls.append(clear)

// create a message
let message = document.createElement('h3')
message.setAttribute('id', 'message')
message.textContent = 'Let\'s Get Rolling!'
game.append(message)

document.addEventListener('DOMContentLoaded', function () {
// TODO: Add event Listener and handler for flip and clear buttons
flip.addEventListener('click', function (){
    let total = 0
    let flipHeads = Math.random() < 0.5

    if(flipHeads) {
    penny.src = './assets/images/penny-heads.jpg'
    headFlips++
    message.textContent = 'You flipped heads!'
    
    } else {
    penny.src = './assets/images/penny-tails.jpg'
    tailFlips++
    message.textContent = 'You flipped tails!'
    }
     
    let hScore = document.querySelector('#heads')
    hScore.textContent = headFlips
    
    let tScore = document.querySelector('#tails')
    tScore.textContent = tailFlips
    total++
  
    let pHeads = `${Math.round(headFlips/total * 100)}%`
    let pTails = `${Math.round(tailFlips/total * 100)}%`

    let hPercent = document.querySelector('#heads-percent')
    hPercent.textContent = pHeads
    let tPercent = document.querySelector('#tails-percent')
    tPercent.textContent = pTails

})

// Clear Button Click Handler
   // TODO: Reset global variables to 0
   // TODO: Update the scoreboard (same logic as in flip button click)

   clearScoreboard.addEventListener('click', function (){
    let total = 0
    let clearScoreboard = Math.random() < 0.5

    if(clearScoreboard) {
      let clearScoreboard = document.createElement('h3')
      clearScoreboard.setAttribute('id', 'message')
      clearScoreboard.textContent = 'Let\'s Get Rolling!'
      game.append(clearScoreboard)
 

}



   
   })


})
