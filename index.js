const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === null || firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === null || lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === null || emailValue === "") {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === null || passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (passwordValue.length <= 6) {
    setErrorFor(password, "Password is too weak");
  } else if (passwordValue.length >= 12) {
    setErrorFor(password, "Password is too long");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const p = formControl.querySelector("p");
  p.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
