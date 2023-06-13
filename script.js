// Function to validate the form on submit
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Perform validation checks
  var errorMessages = [];

  if (fullName.length < 5) {
    errorMessages.push("Name must be at least 5 characters long.");
  }

  if (email.indexOf("@") === -1) {
    errorMessages.push("Enter a valid email address.");
  }

  if (phoneNumber === "123456789" || phoneNumber.length !== 10) {
    errorMessages.push("Enter a valid 10-digit phone number.");
  }

  if (password.length < 8) {
    errorMessages.push("Password must be at least 8 characters long.");
  }

  if (password === "password") {
    errorMessages.push("Password cannot be 'password'.");
  }

  if (password.toLowerCase().includes(fullName.toLowerCase())) {
    errorMessages.push("Password should not contain the user's name.");
  }

  if (password !== confirmPassword) {
    errorMessages.push("Passwords do not match.");
  }

  // Display error messages or submit the form
  if (errorMessages.length > 0) {
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = ""; // Clear previous error messages

    errorMessages.forEach(function(message) {
      var errorElement = document.createElement("p");
      errorElement.className = "error-message";
      errorElement.textContent = message;
      errorContainer.appendChild(errorElement);
    });
  } else {
    alert("Form submitted successfully!");
    document.getElementById("registrationForm").reset(); // Reset the form
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = ""; // Clear error messages
  }
}

// Add event listener to the form on submit
document.getElementById("registrationForm").addEventListener("submit", validateForm);
