const form = document.getElementById('form');
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

const messageContainer = document.querySelector('.message-container')

const message = document.getElementById('message')

let isValid = false;
let passwordMatch = false;

function validateForm(){

    isValid = form.checkValidity();
    console.log(isValid);

    if(!isValid){
        message.textContent= "please fill out all fields";
        message.style.color = "red";
        return;
    }

    if(password1.value == password2.value){
        passwordMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    }
    else {
        passwordMatch = false;
        message.textContent = "password do not match";
        message.style.color = "red";
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
    if(isValid && passwordMatch){
        form.reset(); 
        message.textContent = "Successfully Registered!!";
        message.style.color = "green";
    }
    
}

function processFormData(e){

    e.preventDefault();
    validateForm();

}
form.addEventListener('submit', processFormData);
// form.reset();