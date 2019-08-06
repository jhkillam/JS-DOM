/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var buttonEl = document.getElementById("add-button");

buttonEl.addEventListener('click', function() {
    var userInputEl = document.getElementById("description").value;
    var newItemEl = document.createElement("li");
    document.getElementById("todo-list").appendChild(newItemEl);
    newItemEl.innerHTML = userInputEl;
    newItemEl.classList.add("toDoItem");
    var deleteEl = document.createElement("button");
    deleteEl.innerHTML = "Delete Task";
    newItemEl.appendChild(deleteEl);
    deleteEl.classList.add("deleteTaskButton");

})

// document.getElementById("todo-list").addEventListener("click", function(e){
//     e.target.style.textDecoration = "line-through";
// })

document.getElementById("todo-list").addEventListener("click", function(e){
 
    if (e.target.classList.contains("toDoItem")){
        e.target.classList.remove("toDoItem");
        e.target.classList.add("doneItem");
    }
    else if (e.target.classList.contains("doneItem")){
        e.target.classList.remove("doneItem");
        e.target.classList.add("toDoItem");
    }
})



