// const { default: axios } = require("axios");

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn'); 

window.onload = ()=>{

    if(localStorage.length === 1){
        const userTokeName = localStorage.key(0);
        const userToken = localStorage.getItem(userTokeName);
        // console.log(userToken);
        const msgId = 0;
        axios.get(`http://127.0.0.1:3000/messages/gettingMessages/${msgId}`,{headers : {'Authorization' : userToken}})
        .then(records=>{
            console.log(records.data);
            let msgs = records.data; 
            localStorage.setItem('msgs',JSON.stringify(msgs));

            console.log(msgs);

            msgs.map(msg=>{
                        if(userTokeName===msg.name){
                            const message = document.createElement('li');
                            message.innerHTML = `You : ${msg.msg}`;
                            message.style.paddingLeft = '65rem'
                            messages.appendChild(message);
                        }else{
                            const message = document.createElement('li');
                            message.innerHTML = `${msg.name} : ${msg.msg}`;              
                            messages.appendChild(message);
                        }
                    })
        })
        .catch(err=>{
            console.log(err);
        })
    }else{
        const msgsArr = JSON.parse(localStorage.getItem('msgs'));
        console.log(msgsArr);
        let msgId = msgsArr[msgsArr.length-1].msgId;
        console.log(msgId);

        const userTokeName = localStorage.key(0);
        const userToken = localStorage.getItem(userTokeName);

        axios.get(`http://127.0.0.1:3000/messages/gettingMessages/${msgId}`,{headers : {'Authorization' : userToken}})
        .then(records=>{
            console.log(records);
            
            const newMsgs = records.data;
            console.log(newMsgs);
            
            const oldMsgs = JSON.parse(localStorage.getItem('msgs'));
            console.log(oldMsgs);

            const allMsgs = [...oldMsgs,...newMsgs];
            console.log(allMsgs);

            localStorage.setItem('msgs',JSON.stringify(allMsgs));

            allMsgs.map(msg=>{
                if(userTokeName===msg.name){
                    const message = document.createElement('li');
                    message.innerHTML = `You : ${msg.msg}`;
                    message.style.paddingLeft = '65rem'
                    messages.appendChild(message);
                }else{
                    const message = document.createElement('li');
                    message.innerHTML = `${msg.name} : ${msg.msg}`;              
                    messages.appendChild(message);
                }
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}   

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
    message.style.paddingLeft = '65rem'

    const tokenName = localStorage.key(0);
    // console.log(tokenName);
    const token = localStorage.getItem(tokenName);
    // console.log(token);

    axios.post(`http://127.0.0.1:3000/user/sendMessage`,{msg},{headers : {'Authorization' : token}})
    .then(response=>{
        console.log(response);
    })
    .catch(err=>console.log(err))

})

