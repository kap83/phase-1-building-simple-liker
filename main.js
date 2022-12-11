/*in my own words
 when user clicks a heart, miniServerCall() should be activated. 
miniServerCall() will either return a success or a fail
success = heart becomes red
1. add .activated-heart to make the empty heart have a red outline
2. also use const FULL_HEART to make it completely red
(do this inside the of the .then)
fail = error banner appears 
1. use then to return the error banner
2. use catch & timeOut to have the banner disappear after 3 seconds

other tasks
When the page loads, error banner shouldn't pop up immedately
When a red heart is clicked again, remove activated heart and include const EMPTY_HEART
 */

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Gobal Scope. Snagged stuff
let errorModal = document.querySelector("#modal")
let hearts = document.querySelectorAll(".like-glyph")
//console.log(hearts)
errorModal.classList.add("hidden")

//When the page loads, error banner shouldn't pop up immedately

function hideErrorModal(){
  errorModal.classList.add("hidden")
} 
hideErrorModal()

//click on a heart

function likeListener(heart){
  hearts.forEach(heart => {
    heart.addEventListener("click", e => {
      let clickedHeart = e.target
      //console.log(clickedHeart.innerText, "vs;", EMPTY_HEART)
      //console.log("clickedHeart; ", clickedHeart)
      mimicServerCall()
      .then((res) => {
        if (clickedHeart.innerText === EMPTY_HEART) {
          clickedHeart.classList.add("activated-heart")
          clickedHeart.innerText = FULL_HEART
        } else {
          clickedHeart.classList.remove("activated-heart")
          clickedHeart.innerText = EMPTY_HEART
        }
      })
      .catch((error) => {
        errorModal.classList.remove("hidden")
        setTimeout(hideErrorModal, 3000)
      })
    })
  })
}

likeListener()


















//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
