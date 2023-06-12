var taskInput = document.getElementById("task-input");
var taskList = document.getElementById("task-list");

function addTask() {
    if (taskInput.value !== "") {
        var taskItem = document.createElement("li");
        taskItem.innerHTML = taskInput.value;
        taskList.appendChild(taskItem);
        // Complete checkbox
        var completeButton = document.createElement("input");
        completeButton.type = "checkbox";
        taskItem.appendChild(completeButton);
        // Add delete button
        var deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        taskItem.appendChild(deleteButton);
    }
    taskInput.value = "";
    saveList();
}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "INPUT") {
        e.target.parentElement.classList.toggle("completed");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveList();
}, false);

function saveList() {
    var tasks = [];
    for (var i = 0; i < taskList.children.length; i++) {
        var task = taskList.children.item(i);
        var taskInfo = {
            "text": task.innerHTML,
            "completed": task.classList.contains("completed")
        };
        tasks.push(taskInfo);
    }
    
    localStorage.setItem("task-list", JSON.stringify(tasks));
}

function showList() {
    if (localStorage.getItem("task-list") != null) {
        var tasks = JSON.parse(localStorage.getItem("task-list"));
        for (var i = 0; i < tasks.length; i++) {
            var taskInfo = tasks[i];

            var taskItem = document.createElement("li");
            taskItem.innerHTML = taskInfo.text;
            taskList.appendChild(taskItem);
            // Complete checkbox
            var completeButton = document.createElement("input");
            completeButton.type = "checkbox";
            if (taskInfo.completed == true) {
                completeButton.checked = true;
                taskItem.classList.add("completed");
            }
            taskItem.appendChild(completeButton);
            // Add delete button
            var deleteButton = document.createElement("span");
            deleteButton.innerHTML = "\u00d7";
            taskItem.appendChild(deleteButton);
        }
    }
}

showList();