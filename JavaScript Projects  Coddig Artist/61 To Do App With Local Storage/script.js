//Initial References
const newTaskInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

//Function on window load
window.onload = () => {
  updateNote = "";
  count = Object.keys(localStorage).length;
  displayTasks();
};

//Function to Display The Tasks
const displayTasks = () => {
    if (Object.keys(localStorage).length > 0) {
      tasksDiv.style.display = "inline-block";
    } else {
      tasksDiv.style.display = "none";
    }
     //Clear the tasks
    tasksDiv.innerHTML = "";
    //Fetch All The Keys in local storage
    let tasks = Object.keys(localStorage);
    tasks = tasks.sort();