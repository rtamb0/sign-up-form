const passwordInput = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmpass');
const confirmPasswordError = document.querySelector('input[id="confirmpass"] + span');

passwordInput.addEventListener('input', () => {
    confirmPassword.setAttribute("pattern", `${passwordInput.value}`);
    if (passwordInput.value.length < 8) {
        confirmPassword.setCustomValidity("Please fill up the password field first.");
        confirmPasswordError.classList.add('fill-up-message');
    }
    else {
        confirmPassword.setCustomValidity("");
        confirmPasswordError.classList.remove('fill-up-message');
    };
});
