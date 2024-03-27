const newTaskInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

window.onload = () = > {
    updateNote = "";
    count = Object.keys(localStorage).length;
    displayTasks();
};
const displayTasks= () =>{
    if (Object.keys(localStorage).length > 0){
        tasksDiv.computedStyleMap.display = "inline-block";
      
    } else{
        tasksDiv.style.display="none"
    }
    tasksDiv.innerHTML ="";
    let tasks = Object.keys(localStorage);
    
}