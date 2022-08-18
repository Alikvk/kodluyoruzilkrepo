let buttonDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let lilength = document.getElementsByTagName("li");

for (let i = 0; i < lilength.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = deleteElement;
  lilength[i].append(closeButton);
  lilength[i].onclick = todoCheck;
}

function todoCheck() {
  this.classList.toggle("checked"); // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class
}

function newElement(params) {
  if (checkIsNullOrEmpty(taskDOM.value)) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
  }
  let liDOM = document.createElement("li");
  listDOM.appendChild(liDOM);
  liDOM.innerHTML = task.value;
  taskDOM.value = "";

  liDOM.onclick = todoCheck;

  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = deleteElement;

  liDOM.append(closeButton);
  listDOM.append(liDOM);
  inputElement.value = "";
}

//stackoverflow.com/questions/51000936/deleting-an-item-from-the-todo-app-project
https: function deleteElement(params) {
  this.parentElement.remove();
}

function checkIsNullOrEmpty(value) {
  return typeof value === "undefined" || value === null || value === "";
}
