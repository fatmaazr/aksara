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

const menuToggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('nav ul');

const node = document.createElement('a');
const textnode = document.createTextNode("Log in");
node.appendChild(textnode);

menuToggle.addEventListener('click' , function() {
  nav.classList.toggle('slide');
  document.getElementById("navList").appendChild(node);
})