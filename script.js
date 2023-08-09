const passwordInput = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmpass');

passwordInput.addEventListener('input', () => {
    confirmPassword.setAttribute("pattern", `${passwordInput.value}`);
});

confirmPassword.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        confirmPassword.setCustomValidity('None');
    }
    else {
        confirmPassword.setCustomValidity('');
    };
});