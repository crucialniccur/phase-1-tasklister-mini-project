document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // select my form
  // console.log(document.querySelector("#create-task-form"));
  console.log(document.querySelector("form"));

  //prevent default behavour on form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    handleToDo(e.target.new_task_description.value);
  });
});

function handleToDo(todo) {
  // console.log(todo);
  // create a li
  let li = document.createElement("li");
  li.textContent = todo;
  //create a button
  let btn = document.createElement("button");
  btn.textContent = " delete ";
  li.appendChild(btn);
  // console.log(li);
  document.querySelector("#create-task-form").appendChild(li);
}
