const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

if (!container || !registerBtn || !loginBtn || !loginForm || !registerForm) {
    console.error('Elements not found:', { container, registerBtn, loginBtn, loginForm, registerForm });
    alert('Error: Some elements are missing. Please check the HTML structure.');
}

registerBtn.addEventListener('click', () => {
    console.log('Register button clicked');
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    console.log('Login button clicked');
    container.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('#login-email').value;
    const password = loginForm.querySelector('#login-password').value;
    console.log('Login submitted:', { email, password });
    alert('Login form submitted! Email: ' + email);
    // Add backend integration here (e.g., fetch to /login endpoint)
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('#register-username').value;
    const email = registerForm.querySelector('#register-email').value;
    const password = registerForm.querySelector('#register-password').value;
    console.log('Register submitted:', { username, email, password });
    alert('Register form submitted! Username: ' + username);
    // Add backend integration here (e.g., fetch to /register endpoint)
});
