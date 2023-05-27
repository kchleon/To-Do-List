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
  }
}

// Function to render a task on the page
function renderTask(task) {
  const listItem = document.createElement('li');
  listItem.textContent = task.text;

  if (task.completed) {
    listItem.classList.add('completed');
  }

  list.appendChild(listItem);
}

// Event listener for form submission
form.addEventListener('submit', addTask);

// Function to mark a task as completed
function completeTask(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
    
    // Update the completed property in the tasks array
    const taskText = listItem.textContent;
    const task = tasks.find(task => task.text === taskText);
    task.completed = !task.completed;
  }
  
  // Event listener for clicking on a task
  list.addEventListener('click', completeTask);
  