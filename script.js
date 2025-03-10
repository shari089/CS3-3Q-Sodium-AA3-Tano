function verifyMessage() {
  let message = prompt("Enter a message");
  let print = document.getElementById('result');

  if (message.includes("aI") || message.includes("Ai")) {
      print.textContent = " is tampered with";
  } 
  else if (message.includes("fR") || message.includes("Fr")) {
      print.textContent = " is tampered with";
  } 
  else if (message.includes("FR") && message.includes("AI")) {
      print.textContent = " is legitimate";
  } 
  else if (message.includes("AI")) {
      print.textContent = " is legitimate";
  } 
  else if (message.includes("FR")) {
      print.textContent = " is legitimate";
  } 
  else {
      print.textContent = " is not yet encoded";
  }

  document.getElementById('result').innerHTML = "The message " + message + print.textContent;
}
