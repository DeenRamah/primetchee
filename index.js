// Function to handle user registration
function register() {
    // Get input values
    var firstname = document.querySelector("#register .input-box:nth-of-type(1) input").value;
    var lastname = document.querySelector("#register .input-box:nth-of-type(2) input").value;
    var email = document.querySelector("#register .input-box:nth-of-type(3) input").value;
    var password = document.querySelector("#register .input-box:nth-of-type(4) input").value;

    // Perform validation
    if (firstname === "" || lastname === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Perform additional validation (e.g., email format)
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulated backend storage (replace with actual backend logic)
    var newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    };

    // Simulated backend storage (replace with actual backend logic)
    // Here you would typically make an HTTP request to your backend to store the user data
    // For this example, let's just log the new user data
    console.log("New user registered:", newUser);

    // Clear form fields after successful registration
    clearRegisterForm();
}

// Function to clear register form fields after successful registration
function clearRegisterForm() {
    document.querySelector("#register .input-box:nth-of-type(1) input").value = "";
    document.querySelector("#register .input-box:nth-of-type(2) input").value = "";
    document.querySelector("#register .input-box:nth-of-type(3) input").value = "";
    document.querySelector("#register .input-box:nth-of-type(4) input").value = "";
}

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for email validation
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
