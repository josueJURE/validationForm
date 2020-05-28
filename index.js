
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

});

function checkInputs() {

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue === "") {
    // show error
    // add error class
    setErrorFor(username, 'username cannot be blank');

  } else {
    // add sucess classe
    setSuccesFor(username)
  }


}
