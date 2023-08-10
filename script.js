const passwordInput = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmpass');

passwordInput.addEventListener('input', () => {
    confirmPassword.setAttribute("pattern", `${passwordInput.value}`);
    if (passwordInput.value.length >= 8) {
        confirmPassword.disabled = false;
    }
    else {
        confirmPassword.disabled = true;
        if (passwordInput.value.length <= 1) {
            confirmPassword.value = '';
        };
    };
});
