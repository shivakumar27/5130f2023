const loginForm = document.getElementById('login-form');
const errorDisplay = document.getElementById('login-error-msg');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username-field').value;
        const password = document.getElementById('password-field').value;

        // Add your login validation logic here
        if (username === 'yourUsername' && password === 'yourPassword') {
            // Successful login
            // You can redirect the user to another page or perform other actions
        }else {
            // Invalid login
            errorDisplay.style.display = 'block';
        }
    });
const signupForm = document.getElementById('signup-form');
const forgotPasswordLink = document.querySelector('.forgot-pass a');
const forgotPasswordForm = document.getElementById('forgot-password');
const resetPasswordForm = document.getElementById('reset-password-form');


    

function showLoginForm() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    resetPasswordForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    forgotPasswordLink.style.display = 'block';
}

function showSignupForm() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    resetPasswordForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    forgotPasswordLink.style.display = 'none';
}

function showResetPasswordForm() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    resetPasswordForm.style.display = 'block';
    forgotPasswordForm.style.display = 'none';
    forgotPasswordLink.style.display = 'none';
}

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Your login validation logic here
    // If login fails, show the "Forgot Password?" link
    forgotPasswordForm.style.display = 'block';
});

forgotPasswordLink.addEventListener('click', function (e) {
    e.preventDefault();
    showResetPasswordForm();
});

resetPasswordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Your password reset logic here
    alert('Password reset request sent to the email address provided.');
    showLoginForm();
});
