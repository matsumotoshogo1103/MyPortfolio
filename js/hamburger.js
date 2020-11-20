window.addEventListener("load", () => {
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", () => {
    const hamburgerLists = document.getElementById("hamburger_lists");
    if (hamburgerLists.getAttribute("style") == "display:block;") {
      hamburgerLists.removeAttribute("style", "display:block;")
    } else {
      hamburgerLists.setAttribute("style", "display:block;")
    }
  });
});