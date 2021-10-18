const form = document.getElementById('form'),
      fullName = document.getElementById('fullName'),
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