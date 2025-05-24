// Array to store tasks
let task = [];

// Task class
class Task {
    constructor(title, completeStatus) {
        this.title = title;
        this.completeStatus = completeStatus; // 0 = Not Completed, 1 = Completed
    }
}

// Function to add a task
function addTask(title) {
    let newTask = new Task(title, 0);
    task.push(newTask);
    console.log(`Task added: ${title}`);
}

// Function to list all tasks
function listTask() {
    if (task.length === 0) {
        console.log("No tasks found.");
        return;
    }
    task.forEach((t, index) => {
        let status = t.completeStatus === 1 ? "Completed" : "Not Completed";
        console.log(`${index}: ${t.title} - ${status}`);
    });
}

// Function to mark task as complete
function markTaskComplete(index) {
    if (task[index]) {
        task[index].completeStatus = 1;
        console.log(`Task ${index} marked as completed.`);
    } else {
        console.log("Invalid index.");
    }
}

// Function to remove a task
function removeTask(index) {
    if (task[index]) {
        let removed = task.splice(index, 1);
        console.log(`Removed task: ${removed[0].title}`);
    } else {
        console.log("Invalid index.");
    }
}

// Function to show only completed tasks
function showCompletedTasks() {
    let found = false;
    task.forEach((t, index) => {
        if (t.completeStatus === 1) {
            console.log(`${index}: ${t.title} - Completed`);
            found = true;
        }
    });
    if (!found) {
        console.log("No completed tasks found.");
    }
}


addTask("Buy milk");
addTask("Do homework");
listTask();