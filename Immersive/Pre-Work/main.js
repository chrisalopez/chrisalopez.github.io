console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen"
var cardTwo = "king"
var cardThree = "king"
var cardFour = "queen"

if (cardTwo === cardThree) {
  alert ('You found a Match!')
} else if (cardTwo !== cardOne ) {
  alert ('Sorry, try again.')
} else if (cardTwo !== cardFour) {
  alert ('Sorry, try again.')
} else if (cardOne !== cardThree) {
  alert ('Sorry, try again.')
} else if (cardThree !== cardFour) {
  alert ('Sorry, try again.')
} else (cardOne === cardFour) {
  alert ('You found a Match!')
}
