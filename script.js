const authForm = document.querySelector("#auth-form");
const username = document.getElementById("username");
const usernameMsg = document.getElementById("username-msg");
const password = document.getElementById("password");
const passwordMsg = document.getElementById("password-msg");
let usernameOK, passwordOK;

console.log(authForm);
console.log(username);
console.log(password);

username.addEventListener("change", usernameOnChange);

function usernameOnChange(event) {
  const value = event.target.value;
  if (value.length < 5) {
    usernameMsg.innerHTML = "Atleast 5 characters.";
    usernameOK = false;
  } else {
    usernameMsg.innerHTML = "";
    usernameOK = true;
  }
}

password.addEventListener("change", passwordOnChange);

function passwordOnChange(event) {
  const value = event.target.value;
  if (value.length < 8) {
    passwordMsg.innerHTML = "Atleast 8 characters required.";
    passwordOK = false;
  } else {
    passwordMsg.innerHTML = "";
    passwordOK = true;
  }
}

authForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(usernameOK, passwordOK);
  if (usernameOK && passwordOK) {
    username.style.border = "3px solid green";
    password.style.border = "3px solid green";
  } else {
    username.style.border = "3px solid red";
    password.style.border = "3px solid red";
  }
}
