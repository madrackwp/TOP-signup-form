const confirmPasswordField = document.querySelector("#confirm-password")
const passwordField = document.querySelector("input#password")
const passwordConfirmMessage = document.querySelector("p#password-message")
const emailField = document.querySelector("input#email")

confirmPasswordField.addEventListener("keyup", ()=>{
  if (passwordField.value != confirmPasswordField.value){
    passwordConfirmMessage.innerHTML = "Passwords do not match!"
  } else {
    passwordConfirmMessage.innerHTML = ""
  }
})

