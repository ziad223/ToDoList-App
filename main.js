// All Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let noTasksMessage = document.querySelector(".no-tasks-message");

// Focus on Input Field
 
window.onload = function(){
    theInput.focus();
}

// Adding The Task
theAddButton.onclick = function(){
    if(theInput.value === ''){
        noTasksMessage.innerHTML = "You Should Enter Value in Field";
        noTasksMessage.style.color = 'red';
    }else{

       let noTasksMessage = document.querySelector(".no-tasks-message");
       if(document.body.contains(document.querySelector(".no-tasks-message"))){
        noTasksMessage.remove();
       }

        let mainSpan = document.createElement("span");
        let spanText = document.createTextNode(theInput.value);
       mainSpan.appendChild(spanText);
        mainSpan.className = "task-box";

        let deletElement = document.createElement("span");
        let deleteText = document.createTextNode("Delete");
        deletElement.appendChild(deleteText);
        deletElement.className = "delete";

        mainSpan.appendChild(deletElement);
        tasksContainer.appendChild(mainSpan);

     theInput.value = "";
    theInput.focus();
    calculateTasks()
 
    }
 }


   // Delete Tasks
document.addEventListener("click" , function(e){
    if(e.target.className === 'delete'){
        e.target.parentNode.remove();
    }
     if(tasksContainer.childElementCount ===0){
        createNoTasks();

     }
    calculateTasks();

});



// function Create message "no tasks message"
function createNoTasks() {
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("No Tasks To Show");
    msgSpan.appendChild(msgText);
    msgSpan.className = "no-tasks-message";
    tasksContainer.appendChild(msgSpan)
}


// Function To Calculate Tasks

function calculateTasks() {
tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
}