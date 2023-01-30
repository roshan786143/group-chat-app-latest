
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn'); 

const user = prompt('Enter your username');

const savingUsernameOnlocalstorage = ()=>{
    
    for(let i = 0;i < localStorage.length;i++){
        let username = localStorage.key(i);
        if(user === username){
            const message = document.createElement('li');
            message.innerHTML = `You : joined the chat`;
            messages.appendChild(message);
        }else{
            const message = document.createElement('li');
            message.innerHTML = `${username} : joined the chat`;
            messages.appendChild(message);
        }
    }
}

savingUsernameOnlocalstorage();



input.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        event.preventDefault();
        sendBtn.click();
    }
})

sendBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    let msg = input.value;
    // console.log(msg);
    input.value = '';
    const message = document.createElement('li');
    message.innerHTML = `you : ${msg}`;
    messages.appendChild(message);

    const token = localStorage.getItem(user);
    
    console.log(token);

    axios.post(`http://127.0.0.1:3000/user/sendMessage`,{msg},{headers : {'Authorization' : token}})
    .then(response=>{
        console.log(response);
    })
    .catch(err=>console.log(err))

})