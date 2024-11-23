function checkLogin() {
    // Get the username and password entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Correct credentials
    const correctUsername = 'MrrThai';
    const correctPassword = 'Thai1234';

    // Check if the entered credentials match the correct ones
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the new page (for example: welcome.html)
        window.location.href = "tow.html";  // This is where the user will be redirected if the login is successful.
        return false;  // Prevent form submission
    } else {
        // Show error message if credentials are wrong
        document.getElementById('error-message').textContent = 'Incorrect username or password.';
        return false;  // Prevent form submission
    }
}

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const passwordType = passwordField.type;

    // Toggle between password and text type
    if (passwordType === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});