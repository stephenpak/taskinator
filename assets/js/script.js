var buttonEl = document.querySelector('#save-task');
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function () {
  var listItemEl = document.createElement('li');
  listItemEl.className = 'task-item';
  listItemEl.textContent = 'This is a new task.';
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener('click', createTaskHandler);
//above function expression  is called above
// buttonEl.addEventListener('click', function () {
// //   var listItemEl = document.createElement('li');
// //   listItemEl.className = 'task-item';
// //   listItemEl.textContent = 'This is a new task.';
// //   tasksToDoEl.appendChild(listItemEl);
// // });
