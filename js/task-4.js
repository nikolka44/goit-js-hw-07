const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = formEl.elements.email.value.trim();
    const passwordValue = formEl.elements.password.value.trim();
        if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
        const userData = {
            email: emailValue,
            password: passwordValue,
        };
            console.dir(userData);
        formEl.reset();
    }
}
);
