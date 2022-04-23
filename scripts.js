const confirmPasswordField = document.querySelector("#confirm-password")
const passwordField = document.querySelector("input#password")
const passwordConfirmMessage = document.querySelector("p#password-message")
const emailField = document.querySelector("input#email")
const emailMessage = document.querySelector("p#email-message")

confirmPasswordField.addEventListener("keyup", ()=>{
  if (passwordField.value != confirmPasswordField.value){
    passwordConfirmMessage.innerHTML = "Passwords do not match!"
  } else {
    passwordConfirmMessage.innerHTML = ""
  }
})

// emailField.addEventListener("keyup", ()=>{
//   emailMessage.
// })

