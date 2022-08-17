const input = document.querySelector("#list-input");
const button = document.querySelector("#list-button");
const grocerys = document.querySelector("#grocerys-list");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter")
    if (input.value !== "") {
      addItem(input.value);
    }
});

button.addEventListener("click", () => {
  if (input.value !== "") {
    addItem(input.value);
  }
});

function addItem(value) {
  let li = document.createElement("li");
  li.classList.add("mb-2", "mt-3", "link_cursor");
  li.innerHTML = "- " + value;

  li.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    } else {
      li.style.textDecoration = "line-through";
      li.style.cursor = "pointer";
    }
  });

  grocerys.insertAdjacentElement("beforeend", li);
}
