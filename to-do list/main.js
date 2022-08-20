const taskButton = document.querySelector(".taskButton");
const taskInput = document.querySelector(".taskInput");
const list = document.querySelector(".list");

taskButton.addEventListener("click", () => {
  if (taskInput.value == "") return;
  let item = document.createElement("div");
  let text = document.createElement("span");
  let checkbox = document.createElement("input");
  let deleteButton = document.createElement("button");

  item.className = "list__item";
  text.innerHTML = taskInput.value;
  checkbox.type = "checkbox";
  deleteButton.className = "list__deleteButton";
  deleteButton.innerHTML = "🗑";

  deleteButton.addEventListener("click", () => {
    item.remove();
  });

  list.appendChild(item);
  item.appendChild(text);
  item.appendChild(checkbox);
  item.appendChild(deleteButton);
});
