// let displayMessageBox = document.getElementById('displayMessageBox');
// let displayMessage = document.getElementById('displayMessage');
// let message = document.getElementById('message');

const sendMessage = (event) => {
  event.preventDefault();
  let displayMessageBox = document.getElementById('displayMessageBox');
  let displayMessage = document.getElementById('displayMessage');
  let message = document.getElementById('message');
  message = message.value;
  displayMessage.innerHTML = message;
  // message = '';

  // console.log(displayMessage);
};
