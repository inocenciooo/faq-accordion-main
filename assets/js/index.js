const buttons = document.querySelectorAll(".button");
const questions = document.querySelectorAll(".question");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
    const image = button.querySelector("img");
  });
});
