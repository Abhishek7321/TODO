// Event listener for when the window has finished loading
window.addEventListener('load', () => {
    // Retrieve or initialize the 'todos' array from local storage
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Select DOM elements
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');
    const saveButton = document.querySelector('#save-button');

    // Retrieve or initialize the 'username' from local storage
    const username = localStorage.getItem('username') || '';

    // Set the value of the name input field to the retrieved or default username
    nameInput.value = username;

    // Event listener for changes in the name input field
    nameInput.addEventListener('change', (e) => {
        // Update the 'username' in local storage with the new value
        localStorage.setItem('username', e.target.value);
    });
    saveButton.addEventListener('click', () => {
        // Save the 'todos' array to local storage
        localStorage.setItem('todos', JSON.stringify(todos));

        // Display a message to the user indicating successful save (optional)
        alert('To-do list saved successfully!');
    });

    // Event listener for form submission of the new to-do form
    newTodoForm.addEventListener('submit', e => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Create a new to-do object based on form input values
        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        };

        // Add the new to-do object to the 'todos' array
        todos.push(todo);

        // Update the 'todos' array in local storage
        localStorage.setItem('todos', JSON.stringify(todos));

        // Reset the form
        e.target.reset();

        // Call the function to display the updated to-do list
        DisplayTodos();
    });

    // Call the function to display the initial to-do list
    DisplayTodos();
});

// Function to display the to-do list
function DisplayTodos() {
    // Select the todo list container in the DOM
    const todoList = document.querySelector('#todo-list');

    // Clear the existing content inside the todo list container
    todoList.innerHTML = "";

    // Iterate through each to-do item in the 'todos' array
    todos.forEach(todo => {
        // Create DOM elements for each to-do item
        const todoItem = document.createElement('div');
        // ... (creation of other DOM elements)

        // Append the created elements to the todo list container
        todoList.appendChild(todoItem);

        // Add event listeners for checkbox, edit button, and delete button
        // ... (event listeners for checkbox, edit, and delete)
    });
}
