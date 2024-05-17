const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  // This the sign up page - handle logic after it has been pressed
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  // This the sign in page - same for here
  container.classList.remove("right-panel-active");
});
