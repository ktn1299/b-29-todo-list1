// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

// Function to add a task
function addTask() {
    const taskValue = taskInput.value.trim();

    // Validate input
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";

    // Add task content and delete button
    listItem.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">&times;</button>
    `;

    // Append to task list
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";

    // Add delete functionality to the delete button
    listItem.querySelector(".delete-btn").addEventListener("click", function () {
        taskList.removeChild(listItem);
    });
}

// Function to clear all tasks
function clearAllTasks() {
    taskList.innerHTML = "";
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

clearAllBtn.addEventListener("click", clearAllTasks);