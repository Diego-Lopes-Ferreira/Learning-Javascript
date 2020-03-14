var listElement = document.querySelector('#app td');
var list2 = document.querySelectorAll('#app td')[1];
var entry = document.querySelector('#app input');
var btnAdd = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todos')) || [];
console.log(JSON.stringify(todos))
function renderToDos() {
  listElement.innerHTML = '';
  list2.innerHTML = '';
  for (todo of todos) {
    console.log(todo);
    var todoElement = document.createElement('tr');
    var todoText = document.createTextNode(todo.text);
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);

    var pos = todos.indexOf(todo);

    var tr2 = document.createElement('tr');
    var btnDel = document.createElement('button');
    var btnDellText = document.createTextNode('Excluir');
    btnDel.appendChild(btnDellText);
    btnDel.setAttribute('onclick', ('delToDo(' + pos + ')'));
    tr2.appendChild(btnDel);
    list2.appendChild(tr2);
  };
};

renderToDos();

function addToDo() {
  var todoText = entry.value;
  if (entry.value != '') {
    todos.push({ text: todoText, index: todos.length });
    entry.value = '';
    renderToDos();
    addToStorage();
  }
};

function delToDo(pos) {
  todos.splice(pos, 1);
  renderToDos();
  addToStorage();
}

function addToStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

btnAdd.onclick = addToDo;

entry.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
