document.getElementById("menuBtn").addEventListener("click", function () {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("translate-x-0");
  menu.classList.toggle("-translate-x-full");
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sidebar-link");

function activateNav() {
  let scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    const link = document.querySelector(`.sidebar-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNav);

document.addEventListener("DOMContentLoaded", activateNav);

AOS.init({
  duration: 800,
});
