const passwordInput = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmpass');

passwordInput.addEventListener('change', () => {
    confirmPassword.setAttribute("pattern", `${passwordInput.value}`);
});