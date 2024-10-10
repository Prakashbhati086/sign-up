document.getElementById("signup-form").addEventListener("submit", function (event) {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(function (error) {
        error.style.display = "none";
    });
    

    // Username validation
    const username = document.getElementById("username").value;
    if (username.length < 3) {
        document.getElementById("username-error").textContent = "Username must be at least 3 characters.";
        document.getElementById("username-error").style.display = "block";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid email.";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
        document.getElementById("password-error").style.display = "block";
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        document.getElementById("confirm-password-error").style.display = "block";
        isValid = false;
    }

    // Terms and Conditions validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("terms-error").textContent = "You must agree to the terms and conditions.";
        document.getElementById("terms-error").style.display = "block";
        isValid = false;
    }

    // If not valid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});
