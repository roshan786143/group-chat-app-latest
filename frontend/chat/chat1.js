
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn'); 

window.onload = ()=>{
    const tokenName = localStorage.key(0);
    // console.log(tokenName);
    const token = localStorage.getItem(tokenName);
    // console.log(token);
    axios.get('http://127.0.0.1:3000/messages/gettingMessages',{headers:{'Authorization':token}})
    .then(response=>{
        console.log(response);
        response.data.map(obj=>{
            if(tokenName===obj.name){
                const message = document.createElement('li');
                message.innerHTML = `You : ${obj.msg}`;
                messages.appendChild(message);
            }else{
                const message = document.createElement('li');
                message.innerHTML = `${obj.name} : ${obj.msg}`;
                messages.appendChild(message);
            }
        })
    })
    .catch(err=>{
        console.log(err);
    })
}    // const tokenName = localStorage.key(0);
    // // console.log(tokenName);
    // const token = localStorage.getItem(tokenName);
    // // console.log(token);
    // axios.get('http://127.0.0.1:3000/messages/gettingMessages',{headers:{'Authorization':token}})
    // .then(response=>{
    //     console.log(response);
    //     response.data.map(obj=>{
    //         if(tokenName===obj.name){
    //             const message = document.createElement('li');
    //             message.innerHTML = `You : ${obj.msg}`;
    //             messages.appendChild(message);
    //         }else{
    //             const message = document.createElement('li');
    //             message.innerHTML = `${obj.name} : ${obj.msg}`;
    //             messages.appendChild(message);
    //         }
    //     })
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
// }



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
