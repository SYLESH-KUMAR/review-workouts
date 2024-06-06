function validateForm() {
    let isValid = true;

    const placeInput = document.getElementById('place');
    const placeValue = placeInput.value;

    if (!textPattern.test(placeValue)) {
        isValid = false;
        alert('Please enter only alphabets in the place field.');
        placeInput.focus();
        return isValid;
    }

}

function mobileValidate(val) {
    const mobileInput = document.getElementById('mobile');
    const mobileValue = mobileInput.value;
    console.log(mobileValue)
    const mobilePattern = /^[6789]\d{9}$/;
    const div = document.getElementById("mobileError");

    if (mobileValue === '') {
        div.innerHTML = "";
    } else if (!mobilePattern.test(mobileValue)) {
        div.innerHTML = "ENTER A VALID MOBILE NUMBER!";
    } else {
        div.innerHTML = "";
    }
}

function displayError(val) {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const textPattern = /^[A-Za-z]+$/;
    const div = document.getElementById("error");

    if (nameValue === '') {
        div.innerHTML = "";
    } else if (!textPattern.test(nameValue)) {
        div.innerHTML = "ENTER ONLY ALPHABETS!";
    } else {
        div.innerHTML = "";
    }
}

