const form = document.getElementById("form");
const username = document.getElementById("form__username");
const email = document.getElementById("form__email");
const password = document.getElementById("form__password");
const password2 = document.getElementById("form__password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputsValue();
});

function checkInputsValue() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Veuillez saisir un username");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Veuillez saisir un email");
  } else if (!validateEmail(emailValue)) {
    setError(email, "Veuillez saisir un email valide");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Veuillez saisir un mot de passe");
  } else if (passwordValue.length < 6) {
    setError(password, "Le mot de passe doit contenir au moins 6 caractères");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Veuillez saisir de nouveau le mot de passe");
  } else if (password2Value !== passwordValue) {
    setError(password2, `Le mot de passe saisi n\'est pas valide`);
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formInput = input.parentElement;
  const span = formInput.querySelector("span");

  span.innerText = message;

  formInput.className = "form__inputs error";
}

function setSuccess(input) {
  const formInput = input.parentElement;

  formInput.className = "form__inputs success";
}

function validateEmail(email) {
  var emailReg = new RegExp(
    "^[ a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  var valid = emailReg.test(email);

  if (!valid) {
    return false;
  } else {
    return true;
  }
}
