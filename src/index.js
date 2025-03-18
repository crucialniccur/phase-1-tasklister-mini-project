document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // prevent default
  let form = document.querySelector("form");
  // console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("am working!!!!");
    // grab input value
    handleTaskDescription(e.target.new_task_description.value);
  });

  // create task
});

function handleTaskDescription(task) {
  // console.log(task);
  let li = document.createElement("li");
  li.textContent = task;
  let btn = document.createElement("button");
  btn.textContent = " Delete task ";
  li.appendChild(btn);
  // console.log(li);
  document.querySelector("#tasks").appendChild(li);
}
