// Get the necessary elements from the DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Store the tasks in an array
let tasks = [];

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = input.value.trim(); // Get the task text

    if (taskText !== '') {
        const task = { text: taskText, completed: false }; // Create a new task object
        tasks.push(task); // Add the task to the array

        renderTask(task); // Render the task on the page

        input.value = ''; // Clear the input field
        input.focus(); // Set focus back to the input field

        // Show the buttons
        showButtons();
  }
}

// Function to render a task on the page
function renderTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    // Create the Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);

    // Create the Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    listItem.appendChild(completeButton);

    // Create the Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    if (task.completed) {
        listItem.classList.add('completed');
    }

    list.appendChild(listItem);

    // Event listener for the Delete button
    deleteButton.addEventListener('click', () => {
        deleteTask(index);
    });
}

// Function to show the buttons
function showButtons() {
    const buttons = document.querySelectorAll('li button');
    buttons.forEach(button => {
        button.style.display = 'inline-block';
    });
}

// Event listener for form submission
form.addEventListener('submit', addTask);