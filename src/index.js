document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // prevent default
  let form = document.querySelector("form");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("am working!!!!");
  });
});
