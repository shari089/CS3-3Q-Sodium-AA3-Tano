function verifyMessage() {
  let message = prompt("Enter a message");
  let print = document.getElementById('result');

  if(message.indexOf("aI") !== -1 || message.indexOf("Ai")) !== -1 {
      print.textContent = " is tampered with";
  } 
  else if(message.indexOf("fR") !== -1 || message.indexOf("Fr")) !== -1 {
      print.textContent = " is tampered with";
  } 
  else if(message.indexOf("AI") !== -1 ) {
      print.textContent = " is legitimate";
  } 
  else if(message.indexOf("FR") !== -1 ) {
      print.textContent = " is legitimate";
  } 
  else if(message.indexOf("FR") !== -1 && message.indexOf("AI") !== -1 ) {
      print.textContent = " is legitimate";
  } 
  else {
      print.textContent = " is not yet encoded";
  }
  document.getElementById('result').innerHTML = "The message" + " " + message + " " + print.textContent;
}
