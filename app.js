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
  const createLi = document.createElement("li");
  const span = document.createElement("span");

  span.classList.add("todo-text");

  const newTodo = input.value;
  span.append(newTodo);

  const delBtn = document.createElement('span')
  delBtn.classList.add('delete-todo');
  delBtn.innerHTML = 'delete';

  ul.appendChild(createLi).append(span, delBtn);
  const li = document.querySelector('li');
  localStorage.setItem('todos', ul.innerHTML);
  input.value = "";

  deleteTodo(delBtn);
}

function deleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        localStorage.setItem('todos', ul.innerHTML);
        event.stopPropagation();
    });
    
}

function loadTodo() {
    const data = localStorage.getItem('todos');
    if (data) {
        ul.innerHTML = data;
    }

    const delBtn = document.querySelectorAll('.delete-todo');
    for (const btn of delBtn) {
        deleteTodo(btn);
    }
}
loadTodo()

input.addEventListener("keypress", (keyPressed) => {
  if (keyPressed.which === 13 && input.value !== "") {
    createTodo();
  }
});
