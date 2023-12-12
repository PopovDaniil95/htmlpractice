const accordionHeaders = document.querySelectorAll(".accordion__header")

accordionHeaders.forEach((header) => {
  const iconPlus = header.querySelector(".accordion__icon-plus")
  const iconMinus = header.querySelector(".accordion__icon-minus")

  header.addEventListener("click", () => {
    header.classList.toggle("active")

    const content = header.nextElementSibling
    if (header.classList.contains("active")) {
      content.style.padding = "24px"
      content.style.maxHeight = content.scrollHeight + 24 + "px"
      iconMinus.style.display = "inline-block"
      iconPlus.style.display = "none"
    } else {
      content.style.padding = "0"
      content.style.maxHeight = "0"
      iconMinus.style.display = "none"
      iconPlus.style.display = "inline-block"
    }
  })
})
