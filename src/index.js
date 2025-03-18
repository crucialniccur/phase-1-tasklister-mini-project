// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   // prevent default
//   let form = document.querySelector("form");
//   // console.log(form);
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // console.log("am working!!!!");
//     // grab input value
//     handleTaskDescription(e.target.new_task_description.value);
//     form.reset();
//   });

//   // create task
// });

// function handleTaskDescription(task) {
//   // console.log(task);
//   let li = document.createElement("li");
//   li.textContent = `${task} `;
//   let btn = document.createElement("button");
//   btn.addEventListener("click", deleteTask);
//   btn.textContent = " Delete task ";
//   li.appendChild(btn);
//   // console.log(li);
//   document.querySelector("#tasks").appendChild(li);
// }

// function deleteTask(e) {
//   // console.log(e.target);
//   e.target.parentNode.remove();
// }

// according to the
//  mochatest now
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formInput = document.querySelector("#new-task-description").value;
    // console.log(formInput.value);
    console.log(formInput);
    taskList = document.querySelector("#tasks");
    inputValue(formInput);
  });
});

function inputValue(task) {
  // console.log(task);
  let li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}
