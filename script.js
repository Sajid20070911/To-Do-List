const InputBox = document.querySelector('#input-box');
const TaskList = document.querySelector('.task-list');

function addTask() {
if (InputBox.value === '') {
    alert('Please enter a task');
}
else{
    let task = document.createElement('li');
    task.innerHTML = InputBox.value;
    TaskList.appendChild(task);

    let edit = document.createElement('i');
    edit.innerHTML = "<i class='bx bx-edit-alt'></i>";
    edit.classList.add('edit');
    task.appendChild(edit);

    let trash = document.createElement('i');
    trash.innerHTML = "<i class='bx bx-trash'></i>";
    trash.classList.add('trash');
    task.appendChild(trash);

    }
    InputBox.value = "";   
    saveData();


}

InputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});


TaskList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    } else if (e.target.classList.contains('trash')) {
        e.target.parentElement.remove();
        saveData();

    } else if (e.target.classList.contains('edit')) {
        let task = e.target.parentElement;
        InputBox.value = task.firstChild.textContent;
        task.remove();
        saveData();
    }
});

// This function saves the current task list to local storage
function saveData(){
    localStorage.setItem("data", TaskList.innerHTML);
}
// This function loads the saved tasks from localStorage and displays them in the task list
function showTask(){
    TaskList.innerHTML = localStorage.getItem("data");
}
showTask();