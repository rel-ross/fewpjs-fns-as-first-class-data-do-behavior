/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let timeInt = parseInt(timeString)
  if (timeInt <= 12) {
    return "Good Morning"
  } else if (12 < timeInt <= 17 ) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string){
  document.getElementById("greeting").innerText= string
}
