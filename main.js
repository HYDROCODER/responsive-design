const navtoggle = document.querySelector(".nav-toggle");
const navLists = Array.from(document.querySelectorAll(".nav__list"));
navLists.forEach((navList) => {
  navtoggle.addEventListener("click", () => {
    navList.classList.toggle("nav--visible");
    // console.log(navList);
  });
});
