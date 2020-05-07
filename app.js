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

  const delBtn = document.createElement('span')
  delBtn.classList.add('delete-todo');
  delBtn.innerHTML = 'delete';

  ul.appendChild(li).append(span, delBtn);
  input.value = "";

  deleteTodo(delBtn);
}

function deleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    })
}

input.addEventListener("keypress", (keyPressed) => {
  if (keyPressed.which === 13 && input.value !== "") {
    createTodo();
  }
});
