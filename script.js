const passwordInput = document.querySelector('#password');
const passwordContainer = document.querySelector('.password-inputs p:nth-child(1)');
const confirmPassword = document.querySelector('#confirmpass');
const confirmPasswordContainer = document.querySelector('.password-inputs p:nth-child(2)');

passwordInput.addEventListener('input', () => {
    confirmPassword.setAttribute("pattern", `${passwordInput.value}`);
});
