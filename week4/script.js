document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';
            taskItem.innerHTML = `
                ${task.text}
                <span class="edit" data-index="${index}">✏️</span>
                <span class="delete" data-index="${index}">❌</span>
                <span class="toggle" data-index="${index}">${task.completed ? '↩️' : '✅'}</span>
            `;
            taskList.appendChild(taskItem);
        });
    };

    const addTask = (text) => {
        tasks.push({ text, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    const editTask = (index, newText) => {
        tasks[index].text = newText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    const toggleTask = (index) => {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains('edit')) {
            const newText = prompt('Edit task:', tasks[index].text);
            if (newText) {
                editTask(index, newText);
            }
        } else if (e.target.classList.contains('delete')) {
            deleteTask(index);
        } else if (e.target.classList.contains('toggle')) {
            toggleTask(index);
        }
    });

    renderTasks();
});
