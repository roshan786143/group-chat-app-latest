const signUpDetails = (event) =>{
    event.preventDefault();
    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let mobileNumber = document.getElementById('mobileNumber');
    let password = document.getElementById('password');

    name = name.value;
    email = email.value;
    mobileNumber = mobileNumber.value;
    password = password.value;

    const userDetails = {
        name,
        email,
        mobileNumber,
        password
    }

    console.log(userDetails);




}