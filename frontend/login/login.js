const loginData = (event) => {
  event.preventDefault();

  let email = document.getElementById('email');
  let password = document.getElementById('password');

  email = email.value;
  password = password.value;

  const loginCredentials = {
    email,
    password,
  };

  // console.log(loginCredentials);

  postingLoginDetails(loginCredentials);
};

const postingLoginDetails = (loginCredentials) => {
  axios
    .post('http://127.0.0.1:3000/user/login', loginCredentials)
    .then((response) => {
      console.log('user login credentials posted successfully');
      console.log(response);
    })
    .catch((err) => {
      console.log("There's an error while posting the user login details");
      console.log(err);
    });
};

const goToSignUpPage = (event) => {
  event.preventDefault();
  // console.log('ok');
  window.location.href = '../signUp/signUpPage.html';
};
