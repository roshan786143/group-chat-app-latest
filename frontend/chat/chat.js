// let displayMessageBox = document.getElementById('displayMessageBox');
// let displayMessage = document.getElementById('displayMessage');
// let message = document.getElementById('message');


const sendMessage = (event) => {
  event.preventDefault();
  let displayMessageBox = document.getElementById('displayMessageBox');
  let messageList = document.getElementById('messageList');
  let message = document.createElement('li');
  let inputTextMessageField = document.getElementById('inputTextMessageField');

  const msg = inputTextMessageField.value;
  message.innerHTML = msg;

  messageList.appendChild(message);
  displayMessageBox.appendChild(messageList)

  console.log(msg);

  axios.post('http://127.0.0.1:3000/user/sendMessage',{msg})
  .then(response=>{
    console.log('your message sent successfully.');
    console.log(response);
  })
  .catch(err=>{
    console.log('There\'s an error while sending the message');
    console.log(err);
  })

  // inputTextMessage.value = 'wow';

};

window.onload = (event)=>{
  event.preventDefault();

    const num = localStorage.length;
    // alert(`hey roshan there are ${num} users logged in including you.`);

    const user = localStorage.getItem('candy');

    axios.get('http://127.0.0.1:3000//messages/gettingMessages',{headers : {'Authorization' : user}})
    .then(response=>{
      console.log('you got all your messages back.');
      console.log(response);
    })
    .catch(err=>{
      console.log('There\'s an error while getting your messages back');
      console.log(err);
    })
}