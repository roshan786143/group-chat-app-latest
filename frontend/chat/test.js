
const outerContainer = document.getElementById('outerContainer');
    outerContainer.style.height = '15rem';
    outerContainer.style.width = '25rem';
    outerContainer.style.borderWidth = '2px';
    outerContainer.style.borderStyle = 'solid';
    outerContainer.style.borderColor = 'green';
    outerContainer.style.display = 'inline';

const displayMsgGrpBtnContainer = document.createElement('div');

const dspMsgGrpFunc = (grpName,groupMembers)=>{

    console.log(grpName,groupMembers);
    const tokenName = localStorage.key(0);
    console.log(tokenName);
    const token = localStorage.getItem(tokenName);

    // axios.post('http://127.0.0.1:3000/user/groups',,{headers : {'Authorization' : token}})
}

createGroupBtn.addEventListener('click',()=>{

    // const outerContainer = document.getElementById('outerContainer');
    const createGroupBtn = document.getElementById('createGroupBtn');
    const createGroupBtnContainer = document.getElementById('createGroupBtnContainer');
    const createGroupinputFieldContainer = document.createElement('div');
    const submit = document.createElement('button');

    createGroupBtnContainer.style.height = '2rem';
    createGroupBtnContainer.style.width = '10rem';
    createGroupBtnContainer.style.borderWidth = '2px';
    createGroupBtnContainer.style.borderStyle = 'solid';
    createGroupBtnContainer.style.borderColor = 'red';
    createGroupBtnContainer.style.position = 'relative';
    createGroupBtnContainer.style.top = '10px';

    createGroupinputFieldContainer.style.height = '12rem';
    createGroupinputFieldContainer.style.width = '12rem';
    createGroupinputFieldContainer.style.borderWidth = '1px';
    createGroupinputFieldContainer.style.borderStyle = 'solid';
    createGroupinputFieldContainer.style.paddingTop = '10px';
    createGroupinputFieldContainer.style.position = 'relative';
    createGroupinputFieldContainer.style.left = '12rem';
    createGroupinputFieldContainer.style.top = '-2rem';
    // alert('cool');


    const groupNameLabel = document.createElement('label');
    groupNameLabel.innerHTML = 'Group name : ';

    const groupNameinput = document.createElement('input');

    
    const groupMembers = document.createElement('label');
    groupMembers.innerHTML = 'Add Group Members : ';
    groupMembers.style.position = 'relative';
    groupMembers.style.top = '0.5rem';

    const tokenName = localStorage.key(0);
    const token = localStorage.getItem(tokenName);

    axios.get('http://127.0.0.1:3000/user/getUsers',{headers : {'Authorization' : token}})
    .then(res=>{
        console.log(res);
        const users = res.data;
        
            users.map(user=>{
            const userName = document.createElement('input');
            userName.type = 'checkbox';
            userName.name = 'model'
            userName.value = user;
            userName.style.position = 'relative';
            userName.style.top = '0.8rem';
            userName.style.left = '1rem';
            createGroupinputFieldContainer.appendChild(userName);

            const userLabel = document.createElement('label');
            userLabel.innerHTML = user;
            createGroupinputFieldContainer.appendChild(userLabel);
        })
    })
    .catch(err=>{
        console.log(err);
    })

    // const groupMembersinput = document.createElement('input');
    // groupMembers.nodeType = 'checkbox';
    // const 
    // groupMembers.value = 'hello';
    // groupMembersinput.style.position = 'relative';
    // groupMembersinput.style.top = '0.3rem';

    submit.innerHTML = 'submit';
    submit.style.position = 'relative';
    submit.style.top = '6rem';
    // submit.style.position = 

    createGroupinputFieldContainer.appendChild(groupNameLabel);
    createGroupinputFieldContainer.appendChild(groupNameinput);
    createGroupinputFieldContainer.appendChild(groupMembers);
    // createGroupinputFieldContainer.appendChild(groupMembersinput);
    createGroupinputFieldContainer.appendChild(submit);

    outerContainer.appendChild(createGroupinputFieldContainer);

    submit.addEventListener('click',()=>{
        // const grpName = groupNameinput.value;
        // const groupMembers = groupMembersinput.value;

        dspMsgGrpFunc(grpName,groupMembers);

        outerContainer.removeChild(createGroupinputFieldContainer);
    })

})
// const createGroupBtnContainer = document.getElementById('createGroupBtnContainer');
// const groupsContainer = document.createElement('div');

// const hello = document.createElement('h2');
// hello.innerHTML = 'Hello from Natasha Malkova';

// groupsContainer.appendChild(hello);
// createGroupBtnContainer.appendChild(groupsContainer);
