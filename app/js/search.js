const searchInput = document.querySelector(".search__input")
const searchPlaceholder = document.querySelector(".search__placeholder")

searchInput.addEventListener("click", () => {
  searchPlaceholder.style.display = "none"
})
