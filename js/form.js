const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");


const savedUser = JSON.parse(localStorage.getItem("userData"));
if (savedUser) {
  usernameInput.value = savedUser.username;
  passwordInput.value = savedUser.password;
}

saveBtn.addEventListener("click", () => {
  const userData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Дані збережено!");
});
