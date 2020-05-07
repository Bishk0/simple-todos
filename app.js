const container = document.querySelector(".container");
const createInput = document.createElement("input");

const ul = document.createElement("ul");

createInput.setAttribute("type", "text");
createInput.setAttribute("placeholder", "Додайте нагадування чи подію");

ul.classList.add("todos");

container.append(createInput);
container.append(ul);

const input = document.querySelector('input[type="text"]');

function createTodo() {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.classList.add("todo-text");

  const newTodo = input.value;
  span.append(newTodo);

  ul.appendChild(li).append(span);
  input.value = "";
}

input.addEventListener("keypress", (keyPressed) => {
  if (keyPressed.which === 13 && input.value !== "") {
    createTodo();
  }
});
