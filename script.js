const passwordInput = document.querySelector('#password');
const passwordContainer = document.querySelector('.password-inputs p:nth-child(1)');
const confirmPassword = document.querySelector('#confirmpass');
const confirmPasswordContainer = document.querySelector('.password-inputs p:nth-child(2)');

const passwordError = document.createElement('p');
passwordContainer.appendChild(passwordError);

passwordInput.addEventListener('input', () => {
    confirmPassword.setAttribute("pattern", `${passwordInput.value}`);
    if (passwordInput.value.length < 8 && passwordInput.value.length > 0) {
        passwordError.textContent = "Password needs to be at least 8 characters";
    } else {
        passwordError.textContent = "";
    };
});
