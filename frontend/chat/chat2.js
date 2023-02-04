
const createGroupBtn = document.getElementById('createGroupBtn');
const outerContainer = document.getElementById('outerContainer');

outerContainer.style.height = '16rem';
outerContainer.style.width = '15rem';
outerContainer.style.borderColor = 'green';
outerContainer.style.borderStyle = 'solid';
// outerContainer.style.display = 'inline';

createGroupBtn.style.height = '2rem';
createGroupBtn.style.width = '10rem';
createGroupBtn.style.borderColor = 'red';

createGroupBtn.addEventListener('click',()=>{
    const groupName = prompt('Enter the Group name');
    console.log(groupName);

    const tokenName = localStorage.key(0);
    const token = localStorage.getItem(tokenName);

    axios.post('http://127.0.0.1:3000/user/createdNewGroup',{groupName},{headers : {'Authorization' : token}})
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
})