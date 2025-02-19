document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let taskInput = document.getElementById("task-name");
    let taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let taskList = document.getElementById("task-list");
    let listItem = document.createElement("li");
    listItem.textContent = taskName;
    
    listItem.addEventListener("click", function() {
        this.remove();
    });

    taskList.appendChild(listItem);
    taskInput.value = "";
});
