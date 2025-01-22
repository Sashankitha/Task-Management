document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    listItem.querySelector(".delete-btn").addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = "";
}
