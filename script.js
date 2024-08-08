const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span>${taskText}</span>
      <button class="delete-btn">Удалить</button>`;
    taskList.appendChild(task);
    taskInput.value = '';
  }
}

taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const task = e.target.parentNode;
    task.classList.toggle('done');
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const task = e.target.parentNode;
    taskList.removeChild(task);
  }
});