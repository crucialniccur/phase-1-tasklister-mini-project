document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // select my form
  // console.log(document.querySelector("#create-task-form"));
  console.log(document.querySelector("form"));

  //prevent default behavour on form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
  });
});
