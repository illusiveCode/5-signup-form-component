// Select the element you want to add the click handler to
const button = document.querySelector(".claim-button");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstErrorIcon = document.querySelector(".error-icon-1");
const firstNameError = document.querySelector(".error-message-1");

const inputFields = [];
// Define the click handler function
const handleClick = (event) => {
  event.preventDefault();

  formValidation();
  // firstName.ariaValueMax.trim()
};

button.addEventListener("click", handleClick);

const formValidation = () => {
  // firstname check
  if (firstName.value.trim() === "") {
    firstNameError.style.display = "block";
    firstErrorIcon.style.display = "block";
    firstName.style.outlineColor = "red";
    // alert("fill in first name");
  } else {
    firstNameError.style.display = "";
    firstErrorIcon.style.display = "";
    firstName.style.outlineColor = "";
  }
};
