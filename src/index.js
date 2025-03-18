document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // prevent default
  let form = document.querySelector("form");
  // console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("am working!!!!");
    // grab input value
    console.log(e.target.new_task_description.value);
  });

  // create task
});

function handleTaskDescription(task) {
  // console.log(task);
  let li = document.createElement("li");
  li.textContent = task;
  console.log(li);
}
