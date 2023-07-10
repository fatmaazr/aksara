const loadingElement = document.querySelector(".loading");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});

const header = document.querySelector('.header');

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener('scroll', headerActive);