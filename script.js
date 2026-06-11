let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let columns = document.querySelectorAll(".column");
let search = document.querySelector("#searchInput");
let priority = document.querySelector("#priorityInput");
let themeBtn =
document.querySelector("#themeBtn");

let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

themeBtn.addEventListener(
"click",
function(){
    document.body.classList.toggle("dark");
    if(
    document.body.classList.contains("dark")
    ){
        localStorage.setItem(
        "theme",
        "dark"
        );

    }
    else{
        localStorage.setItem(
        "theme",
        "light"
        );
    }
});

button.addEventListener("click", function(){
    let newTask = {
        id: Date.now(),
        title: input.value,
        priority: priority.value,
        status:"todo"
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    input.value="";
});

search.addEventListener("input", function(){
    renderTasks();
});

function renderTasks(){
    columns.forEach(function(column){
        column.innerHTML =
        `<h2>${column.dataset.status}</h2>`;
    });

    let filteredTasks =
    tasks.filter(function(task){
        return task.title
        .toLowerCase()
        .includes(
            search.value.toLowerCase()
        );
    });

    filteredTasks.forEach(function(task){
        let taskDiv =
        document.createElement("div");
        taskDiv.classList.add("task");
        if(task.priority==="High"){
            taskDiv.classList.add("high");
        }
        else if(task.priority==="Medium"){
            taskDiv.classList.add("medium");
        }
        else{
            taskDiv.classList.add("low");
        }

        taskDiv.draggable = true;
        let taskText =
        document.createElement("span");

        taskText.innerText =
        task.title + " - " + task.priority;

        let editBtn =
        document.createElement("button");

        editBtn.innerText="Edit";

        editBtn.addEventListener("click", function(){
            editTask(task.id);
        });

        let deleteBtn =
        document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.addEventListener("click", function(){
            deleteTask(task.id);
        });
        taskDiv.addEventListener(
        "dragstart",
        function(){
            taskDiv.dataset.id =
            task.id;
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(deleteBtn);

        let selectedColumn =
        document.querySelector(
        `[data-status="${task.status}"]`
        );
        selectedColumn.appendChild(taskDiv);
    });
}

columns.forEach(function(column){
    column.addEventListener(
    "dragover",
    function(event){
        event.preventDefault();
    });

    column.addEventListener(
    "drop",
    function(){
        let id =
        document.querySelector("[data-id]")
        .dataset.id;
        tasks =
        tasks.map(function(task){
            if(task.id == id){
                return {
                    ...task,
                    status:
                    column.dataset.status
                };
            }
            return task;
        });

        saveTasks();
        renderTasks();
    });
});

function deleteTask(id){

    tasks =
    tasks.filter(function(task){
        return task.id !== id;
    });

    saveTasks();
    renderTasks();
}

function editTask(id){
    let newTitle =
    prompt("Enter new task");
    tasks =
    tasks.map(function(task){
        if(task.id===id){
            return{
                ...task,
                title:newTitle
            };
        }
        return task;
    });
    saveTasks();
    renderTasks();

}

function saveTasks(){
    localStorage.setItem(
      "tasks",
        JSON.stringify(tasks)
    );
}

let savedTheme =
localStorage.getItem("theme");
if(savedTheme==="dark"){
    document.body.classList.add("dark");
}

renderTasks();