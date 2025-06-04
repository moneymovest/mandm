const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

if (!container || !registerBtn || !loginBtn || !loginForm || !registerForm) {
    console.error('Elements not found:', { container, registerBtn, loginBtn, loginForm, registerForm });
}

registerBtn.addEventListener('click', () => {
    console.log('Register button clicked');
    container.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
});

loginBtn.addEventListener('click', () => {
    console.log('Login button clicked');
    container.classList.remove('active');
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
});
