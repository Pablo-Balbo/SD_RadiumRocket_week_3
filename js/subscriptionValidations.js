const fullName = document.getElementById('fullName'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      confirmPassword = document.getElementById('confirmPassword'),
      age = document.getElementById('age'),
      phoneNumber = document.getElementById('phoneNumber'),
      address = document.getElementById('address'),
      city = document.getElementById('city'),
      zipCode = document.getElementById('zipCode'),
      id = document.getElementById('id'),
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
    }
};

fullName.onfocus = function() {
    if(errorMessage[0].style.display === 'block') {
        errorMessage[0].style.display = 'none';
    }
};

email.onblur = function() {
    const emailConditions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailConditions.test(email.value)) {
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerText = 'Enter a valid email';
    }
};

email.onfocus = function(){
    if(errorMessage[1].style.display === 'block') {
        errorMessage[1].style.display = 'none';
    }
};

password.onblur = function() {
    let passwordValue = password.value;
    const characters = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
    if(passwordValue.length < 8) {
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerText = 'Passowrd must have at least 8 characters';
    } else if(!characters.test(passwordValue)) {
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerText = 'Enter a lowercase, an uppercase and a number';
    }
};

password.onfocus = function() {
    if(errorMessage[2].style.display === 'block') {
        errorMessage[2].style.display = 'none';
    }
};

confirmPassword.onblur = function() {
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    if(passwordValue !== confirmPasswordValue) {
        errorMessage[3].style.display = 'block';
        errorMessage[3].innerText = 'Passwords do not match';
    }
};

confirmPassword.onfocus = function() {
    if(errorMessage[3].style.display === 'block') {
        errorMessage[3].style.display = 'none';
    }
};

age.onblur = function() {
    let ageValue = parseInt(age.value, 0);
    if(ageValue < 18 ||  !Number.isInteger(ageValue)) {
        errorMessage[4].style.display = 'block';
        errorMessage[4].innerText = 'Age must be equal or greater than 18';
    }
};

age.onfocus = function() {
    if(errorMessage[4].style.display === 'block') {
        errorMessage[4].style.display = 'none';
    }
};

phoneNumber.onblur = function() {
    let phoneNumberValue = phoneNumber.value;
    const specialCharacters = [' ', '(', ')', '-'];
    for (let i=0; i < specialCharacters.length; i++) {
        if(phoneNumberValue.includes(specialCharacters[i])) {
            errorMessage[5].style.display = 'block';
            errorMessage[5].innerText = 'Must have numbers only';
            return;
        } else if(phoneNumberValue.length < 7) {
            errorMessage[5].style.display = 'block';
            errorMessage[5].innerText = 'Must have more than 6 digits';
        }
    }
};

phoneNumber.onfocus = function() {
    if(errorMessage[5].style.display === 'block') {
        errorMessage[5].style.display = 'none';
    }
};

address.onblur = function() {
    let addressValue = address.value;
    const characters = new RegExp("^(?=.*[A-z])(?=.*[0-9])");
    if(addressValue.length < 5) {
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerText = 'Address must have at least 5 characters';
    } else if(!characters.test(addressValue)) {
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerText = 'Must use letters and numbers';
    } else if(!addressValue.includes(' ')) {
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerText = 'Must have a blank space between street´s name and number';
    }
}

address.onfocus = function() {
    if(errorMessage[6].style.display === 'block') {
        errorMessage[6].style.display = 'none';
    }
};

city.onblur = function() {
    let cityValue = city.value;
    if(cityValue.length < 3) {
        errorMessage[7].style.display = 'block';
        errorMessage[7].innerText = 'City must have at least 3 characters';
    }
}

city.onfocus = function() {
    if(errorMessage[7].style.display === 'block') {
        errorMessage[7].style.display = 'none';
    }
};

zipCode.onblur = function() {
    let zipCodeValue = zipCode.value;
    if(zipCodeValue.length < 3) {
        errorMessage[8].style.display = 'block';
        errorMessage[8].innerText = 'Zip code must have at least 3 characters';
    }
}

zipCode.onfocus = function() {
    if(errorMessage[8].style.display === 'block') {
        errorMessage[8].style.display = 'none';
    }
};

id.onblur = function() {
    let idValue = id.value;
    if(idValue.length < 7 || idValue.length > 8) {
        errorMessage[9].style.display = 'block';
        errorMessage[9].innerText = 'Id must have between 7 and 8 digits';
    }
}

id.onfocus = function() {
    if(errorMessage[9].style.display === 'block') {
        errorMessage[9].style.display = 'none';
    }
};