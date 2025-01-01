// Select DOM elements
const loginContainer = document.getElementById("loginContainer");
const loginToggleButton = document.getElementById("login");
const registerToggleButton = document.getElementById("register");
const formContainer = document.querySelector(".container");
const loginForm = document.querySelector('.sign-in form'); // Sign In form
const emailInput = document.querySelector('.sign-in input[type="email"]');
const passwordInput = document.querySelector('.sign-in input[type="password"]');
const contentSection = document.getElementById("content");

// Toggle to Sign In Form
loginToggleButton.addEventListener("click", () => {
  formContainer.classList.remove("sign-up-mode"); // Show sign-in form
});

// Toggle to Sign Up Form
registerToggleButton.addEventListener("click", () => {
  formContainer.classList.add("sign-up-mode"); // Show sign-up form
});

// Show login page initially
document.addEventListener("DOMContentLoaded", () => {
  loginContainer.style.display = 'block';  // Show login container
  formContainer.classList.remove("sign-up-mode");  // Ensure Sign Up mode is off
});

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission to allow validation

  // Get email and password from input fields
  const email = emailInput.value;
  const password = passwordInput.value;

  // Simple validation (you can replace this with real authentication logic)
  if (email === "test@example.com" && password === "password123") {
    // Successful login - redirect to home page
    alert("Login successful! Redirecting to the home page.");
    redirectToHomePage();
  } else {
    // Invalid credentials - show error message
    alert("Invalid email or password. Please try again.");
  }
});

// Redirect to home page (this can be done by showing the main content and hiding the login page)
function redirectToHomePage() {
  // Hide the login page and show the home content
  loginContainer.style.display = 'none';
  contentSection.style.display = 'block';
}
