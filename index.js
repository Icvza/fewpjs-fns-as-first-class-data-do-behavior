/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time) {
  // Just grab the hour get rid of the other half
  const hourTime = time.split(':')
  // This will give back an array
  // grab the the hour and convert into a string
  const hour = parseInt(hourTime[0])
  // Create conditionals that will tell the time 
  if(hour < 12 ) {
    return "Good Morning"
  }
  else if(hour >= 12 && hour < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */


function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}