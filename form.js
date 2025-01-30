document.getElementById("secureForm").addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  let usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^\d{10}$/;

  validateField(username, usernameRegex, "usernameError");
  validateField(password, passwordRegex, "passwordError");
  validateField(email, emailRegex, "emailError");
  validateField(phone, phoneRegex, "phoneError");
}

function validateField(input, regex, errorId) {
  let errorMsg = document.getElementById(errorId);
  if (!regex.test(input.value)) {
      input.classList.add("error");
      errorMsg.style.display = "block";
  } else {
      input.classList.remove("error");
      errorMsg.style.display = "none";
  }
}