const todoList = [{
  name : 'make dinner',
  dueDate: '2024-11-23'
},{
  name : 'wash dishes',
  dueDate: '2024-11-23'
}];
renderTodoList();
function renderTodoList() {
let todoListHtml = '';
for(let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
  const {name, dueDate} = todoObject; //this line is a shortcut for the above commented lines.
  const html = `<div>${name}</div>
  <div> ${dueDate} </div>
  <button class="delete-button" onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
  ">Delete</button>
  `;
  todoListHtml += html;
}
document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}
function addTodo() {
  const inputElement = document.querySelector('.js-todo-text');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name: name,
    dueDate: dueDate,
  });
 

  inputElement.value = '';
  renderTodoList();

}