const menuBtn = document.querySelector(".menu__btn-drop-down")
const menuMobile = document.getElementById("menu-list-id")
const menuOpen = document.getElementById("drop-down-open-id")
const menuClose = document.getElementById("drop-down-close-id")

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__btn-drop-down_open")
  menuBtn.classList.toggle("menu__btn-drop-down_close")
})
