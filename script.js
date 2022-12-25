const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", validateLogin);
registerForm.addEventListener("submit", validateRegister);

function validateLogin(event) {
    event.preventDefault();

    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    if(!email) {
        alert("Please enter your email.");
        return;
    }
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if(!password) {
        alert("Please enter your password.");
        return;
    }
    if(password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return;
    }

    loginForm.submit();
}

function validateRegister(event) {
    event.preventDefault();

    const name = registerForm.elements.name.value.trim();
    const email = registerForm.elements.email.value.trim();
    const password = registerForm.elements.password.value.trim();

    if (!name || name.length < 3) {
        alert("Please enter your name.");
        return;
    }
    if(!email) {
        alert("Please enter your email.");
        return;
    }
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if(!password) {
        alert("Please enter your password.");
        return;
    }
    if(password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return;
    }
    registerForm.submit();
}
