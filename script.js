
const burgerButton = document.getElementById("burger_button");
const burgerMenu = document.getElementById("burger_menu");
const body = document.body;

function toggleOpenClass() {
  burgerMenu.classList.toggle("open");
  burgerButton.classList.toggle("open");
  if (burgerMenu.classList.contains("open")) {
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else {
    body.style.height = "auto";
    body.style.overflow = "auto";
  }
}

burgerButton.addEventListener("click", toggleOpenClass);
burgerMenu.addEventListener("click", toggleOpenClass);