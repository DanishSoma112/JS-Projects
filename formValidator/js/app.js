const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }
    })
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



function checkEmail(email) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const bool = re.test(String(email.value).toLocaleLowerCase());
    if (bool) {
        showSuccess(email)
    }
    else {
        showError(email, 'Email is not valid');
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else {
        showSuccess(input)
    }
}

function checkPassword(password1,password2){
    if(password1.value !== password2.value){
        showError(password2,'password doesnot match');
    }
}

function checkPasswordCondition(input){
    if (input.value.toUpperCase() !== input.value){
        showError(password1,`${getFieldName(input)}  must contains a uppercase letter`);
    }
    if (input.value.toLowerCase() !== input.value){
        showError(password1,`${getFieldName(input)}  must contains a lowercase letter`);
    }
}


// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password1, password2])
    checkLength(username, 3, 15);
    checkLength(password1, 6, 25);
    checkEmail(email);
    checkPassword(password1,password2);
    checkPasswordCondition(password1);
});