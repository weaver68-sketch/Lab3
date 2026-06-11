
//Lab 3 - Theodore Weaver - 6/10/2026

const submitButton = document.getElementById('submit-button');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone-number');
const locationList = document.getElementById('location');

const preferredLocationInput = document.getElementById('location');
const streetInput = document.getElementById('street');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');

submitButton.addEventListener('click', function() {
    console.clear();
    const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        phone: phoneInput.value,
        location: locationList.value,
        preferredLocation: preferredLocationInput.value,
        street: streetInput.value,
        city: cityInput.value,
        state: stateInput.value,
        zip: zipInput.value
    };
    alert('Account created successfully!');
    console.log(user);

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    phoneInput.value = '';
    locationList.value = '';
    preferredLocationInput.value = '';
    streetInput.value = '';
    cityInput.value = '';
    stateInput.value = '';
    zipInput.value = '';

});
