// Завдання 1
const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
  list.innerHTML = "";
  bookmarks.forEach((url, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${url}" target="_blank">${url}</a>
      <div>
        <button class="edit">Редагувати</button>
        <button class="delete">Видалити</button>
      </div>
    `;
    li.querySelector(".delete").addEventListener("click", () => {
      bookmarks.splice(index, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      renderBookmarks();
    });
    li.querySelector(".edit").addEventListener("click", () => {
      const newUrl = prompt("Введи нову адресу:", url);
      if (newUrl) {
        bookmarks[index] = newUrl;
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        renderBookmarks();
      }
    });
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (url === "") return;
  bookmarks.push(url);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  input.value = "";
  renderBookmarks();
});

renderBookmarks();




//              Завдання 2

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



