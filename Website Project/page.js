function reviewForm() {
    let isValid = true;

    const usernameInput = document.getElementById('username');
    const usernameValue = usernameInput.value;
    const textPattern = /^[A-Za-z]+$/;

    if (!textPattern.test(usernameValue)) {
        isValid = false;
        alert('Please enter only alphabets in the username field.');
        usernameInput.focus();
        return isValid;
    }

    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value;

    if (!textPattern.test(passwordValue)) {
        isValid = false;
        alert('Please enter only alphabets in the password field.');
        passwordInput.focus();
        return isValid;
    }

    return isValid;
}

