const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const signInEMail = document.getElementById('signin-email');
const password = document.getElementById('password');
const signInPassW = document.getElementById('signin-password');
const password2 = document.getElementById('password2');
const signIn = document.getElementById('modal');

//Functions
//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//Check if email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}
//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${min} characters`
    );
  } else {
    showSuccess(input);
  }
}
//Check if passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}
//Get fieldname
function getFieldName(input) {
  return input.name;
}

//Display signin modal
function showModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('signup-form').style.display = 'none';
}

//Event Listener
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([email, password, password2]);
  checkLength(password2, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

signIn.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([signInEMail, username, signInPassW]);
  checkLength(password2, 6, 25);
  checkEmail(signInEMail);
});
