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
      form = document.getElementById('form'),
      submit = document.getElementById('submit'),
      title = document.getElementById('title');

let errorMessage = document.getElementsByClassName('errorMessage');

let fullNameValue = '',
    emailValue = '',
    passwordValue = '',
    ageValue = '',
    phoneNumberValue = '',
    addressValue = '',
    cityValue = '',
    zipCodeValue = '',
    idValue = '';

let titleValue = '';
fullName.onkeyup = function() {
    title.innerText =  titleValue + fullName.value;
};

var fullNameMessage = '';
fullName.onblur = function() {
    fullNameValue = fullName.value;
    if(fullNameValue.length <= 6) {
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerText = 'Name must be more than 6 characters';
        fullNameMessage = 'Name must be more than 6 characters \n';
    } else if(fullNameValue.indexOf(' ') === -1) {
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerText = 'Name must have a blank space';
        fullNameMessage = 'Name must have a blank space \n';
    } else {
        fullNameMessage = `Full name: ${fullNameValue} \n`;
    }
};

fullName.onfocus = function() {
    if(errorMessage[0].style.display === 'block') {
        errorMessage[0].style.display = 'none';
    }
    titleValue = title.innerHTML;
};

var emailMessage = '';
email.onblur = function() {
    emailValue = email.value;
    const emailConditions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailConditions.test(emailValue)) {
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerText = 'Enter a valid email';
        emailMessage = 'Enter a valid email \n';
    } else {
        emailMessage = `Email: ${emailValue} \n`;
    }
};

email.onfocus = function(){
    if(errorMessage[1].style.display === 'block') {
        errorMessage[1].style.display = 'none';
    }
};

var passwordMessage = '';
password.onblur = function() {
    const characters = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
    passwordValue = password.value;
    if(passwordValue.length < 8) {
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerText = 'Passowrd must have at least 8 characters';
        passwordMessage = 'Passowrd must have at least 8 characters \n';
    } else if(!characters.test(passwordValue)) {
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerText = 'Enter a lowercase, an uppercase and a number';
        passwordMessage = 'Enter a lowercase, an uppercase and a number \n';
    } else {
        passwordMessage = `Password: ${passwordValue} \n`;
    }
};


password.onfocus = function() {
    if(errorMessage[2].style.display === 'block') {
        errorMessage[2].style.display = 'none';
    }
};

var passwordConfirmMessage = '';
confirmPassword.onblur = function() {
    let confirmPasswordValue = confirmPassword.value;
    if(passwordValue !== confirmPasswordValue) {
        errorMessage[3].style.display = 'block';
        errorMessage[3].innerText = 'Passwords do not match';
        passwordConfirmMessage = 'Passwords do not match \n';
    } else {
        passwordConfirmMessage = `Confirm password: ${confirmPasswordValue} \n`;
    }
};

confirmPassword.onfocus = function() {
    if(errorMessage[3].style.display === 'block') {
        errorMessage[3].style.display = 'none';
    }
};

var ageMessage = '';
age.onblur = function() {
    ageValue = parseInt(age.value, 0);
    if(ageValue < 18 ||  !Number.isInteger(ageValue)) {
        errorMessage[4].style.display = 'block';
        errorMessage[4].innerText = 'Age must be equal or greater than 18';
        ageMessage = 'Age must be equal or greater than 18 \n';
    } else {
        ageMessage = `Age: ${ageValue} \n`;
    }
};

age.onfocus = function() {
    if(errorMessage[4].style.display === 'block') {
        errorMessage[4].style.display = 'none';
    }
};

var phoneNumberMessage = '';
phoneNumber.onblur = function() {
    phoneNumberValue = phoneNumber.value;
    const specialCharacters = [' ', '(', ')', '-'];
    for (let i=0; i < specialCharacters.length; i++) {
        if(phoneNumberValue.includes(specialCharacters[i])) {
            errorMessage[5].style.display = 'block';
            errorMessage[5].innerText = 'Must have numbers only';
            phoneNumberMessage = 'Must have numbers only \n';
            return;
        } else if(phoneNumberValue.length < 7) {
            errorMessage[5].style.display = 'block';
            errorMessage[5].innerText = 'Must have more than 6 digits';
            phoneNumberMessage = 'Must have more than 6 digits \n';
        } else {
            phoneNumberMessage = `Phone number: ${phoneNumberValue} \n`;
        }
    }
};

phoneNumber.onfocus = function() {
    if(errorMessage[5].style.display === 'block') {
        errorMessage[5].style.display = 'none';
    }
};

var addressMessage = '';
address.onblur = function() {
    addressValue = address.value;
    const characters = new RegExp("^(?=.*[A-z])(?=.*[0-9])");
    if(addressValue.length < 5) {
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerText = 'Address must have at least 5 characters';
        addressMessage = 'Address must have at least 5 characters \n';
    } else if(!characters.test(addressValue)) {
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerText = 'Must use letters and numbers';
        addressMessage = 'Must use letters and numbers \n';
    } else if(!addressValue.includes(' ')) {
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerText = 'Must have a blank space between street´s name and number';
        addressMessage = 'Must have a blank space between street´s name and number \n';
    } else {
        addressMessage = `Address: ${addressValue} \n`;
    }
};

address.onfocus = function() {
    if(errorMessage[6].style.display === 'block') {
        errorMessage[6].style.display = 'none';
    }
};

var cityMessage = '';
city.onblur = function() {
    cityValue = city.value;
    if(cityValue.length < 3) {
        errorMessage[7].style.display = 'block';
        errorMessage[7].innerText = 'City must have at least 3 characters';
        cityMessage = 'City must have at least 3 characters \n';
    } else {
        cityMessage = `City: ${cityValue} \n`;
    }
};

city.onfocus = function() {
    if(errorMessage[7].style.display === 'block') {
        errorMessage[7].style.display = 'none';
    }
};

var zipCodeMessage = '';
zipCode.onblur = function() {
    zipCodeValue = zipCode.value;
    if(zipCodeValue.length < 3) {
        errorMessage[8].style.display = 'block';
        errorMessage[8].innerText = 'Zip code must have at least 3 characters';
        zipCodeMessage = 'Zip code must have at least 3 characters \n';
    } else {
        zipCodeMessage = `Zip code: ${zipCodeValue} \n`;
    }
};

zipCode.onfocus = function() {
    if(errorMessage[8].style.display === 'block') {
        errorMessage[8].style.display = 'none';
    }
};

var idMessage = '';
id.onblur = function() {
    idValue = id.value;
    if(idValue.length < 7 || idValue.length > 8) {
        errorMessage[9].style.display = 'block';
        errorMessage[9].innerText = 'Id must have between 7 and 8 digits';
        idMessage = idValue, '\n';
    } else {
        idMessage = `ID: ${idValue} \n`;
    }
};

id.onfocus = function() {
    if(errorMessage[9].style.display === 'block') {
        errorMessage[9].style.display = 'none';
    }
};

form.onsubmit = function(e) {
    if (e && "preventDefault" in e) 
        e.preventDefault();
    const alertMessage = `${fullNameMessage} \n ${emailMessage} \n ${passwordMessage} \n ${passwordConfirmMessage} \n ${ageMessage} \n ${phoneNumberMessage} \n ${addressMessage} \n ${cityMessage} \n ${zipCodeMessage} \n ${idMessage} \n `;
    alert(alertMessage);
    let url = `http://curso-dev-2021.herokuapp.com/newsletter?`
    + `name=` + encodeURIComponent(`${fullNameValue}`) + `&`
    + `email=` + encodeURIComponent(`${emailValue}`) + `&`
    + `password=` + encodeURIComponent(`${passwordValue}`) + `&`
    + `age=` + encodeURIComponent(`${ageValue}`) + `&`
    + `phone_number=` + encodeURIComponent(`${phoneNumberValue}`) + `&`
    + `address=` + encodeURIComponent(`${addressValue}`) + `&`
    + `city=` + encodeURIComponent(`${cityValue}`) + `&`
    + `zip_code=` + encodeURIComponent(`${zipCodeValue}`) + `&`
    + `id=` + encodeURIComponent(`${idValue}`);
 
    fetch(url)
    .then(response => {
        if(response.status === 200) {
           return `Newsletter subscription successful: \n` + response.json();
        } else {
           return `Newsletter subscription failure: \n` + response.statusText;
        }
    })
    .then(info => console.log(info))
    .catch(function(error) {
        console.log('Error trying to send the data: ' + error)
    });
};