const fullName = document.getElementById('fullName'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      confirmPassword = document.getElementById('confirmPassword'),
      age = document.getElementById('age'),
      phoneNumber = document.getElementById('phoneNumber'),
      address = document.getElementById('address'),
      city = document.getElementById('city'),
      postalCode = document.getElementById('postalCode'),
      dni = document.getElementById('dni'),
      sendForm = document.getElementById('sendForm');

let errorMessage = document.getElementsByClassName('errorMessage');

fullName.onblur = function() {
    let fullNameValue = fullName.value;

    if(fullNameValue.length <= 6) {
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerText = 'Name must be more than 6 characters';
    } else if(fullNameValue.indexOf(' ') === -1) {
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerHTML = 'Name must have a blank space';
    } else {
        errorMessage[0].style.display = 'none';
    }
};

fullName.onfocus = function() {
    if(errorMessage[0].style.display === 'block') {
        errorMessage[0].style.display = 'none';
    }
};

email.onblur = function(){
    const emailConditions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailConditions.test(email.value) === false){
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerText = 'Enter a valid email';
    } else {
        errorMessage[1].style.display = 'none';
    }
};

email.onfocus = function(){
    if(errorMessage[1].style.display === 'block'){
        errorMessage[1].style.display = 'none';
    }
};

password.onblur = function(){
    let passwordValue = password.value;
    const characters = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
    if(passwordValue.length < 8){
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerText = 'Passowrd must have al least 8 characters';
    } else if(characters.test(passwordValue) === false){
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerText = 'Enter a lowercase, an uppercase and a number';
    } else {
        errorMessage[2].style.display = 'none';
    }
};

password.onfocus = function(){
    if(errorMessage[2].style.display === 'block'){
        errorMessage[2].style.display = 'none';
    }
};