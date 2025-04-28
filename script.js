function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please type something before adding!");
        return;
    }

    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", function () {
        this.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function (e) {
        e.stopPropagation(); 
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}

