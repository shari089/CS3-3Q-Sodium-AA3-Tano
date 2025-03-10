function verifyMessage() {
  let message = prompt("Enter a message");
  let print = document.getElementById('result');

  if(message.indexOf("aI") || message.indexOf("Ai")) {
      print.textContent = " is tampered with";
  } else if(message.indexOf("fR") || message.indexOf("Fr")) {
      print.textContent = " is tampered with";
  } else if(message.indexOf("AI")) {
      print.textContent = " is legitimate";
  } else if(message.indexOf("FR")) {
      print.textContent = " is legitimate";
  } else if(message.indexOf("FR") && message.indexOf("AI")) {
      print.textContent = " is legitimate";
  } else {
      print.textContent = " is not yet encoded";
  }
  document.getElementById('result').innerHTML = "The message" + " " + message + " " + print.textContent;
}
