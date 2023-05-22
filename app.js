/* 
  Click event listener for the navbar toggle button to show/hide the items. */

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// const footerBtn = document.getElementById("footer-toggle");
// const footerLinks = document.getElementById("footer-links");

navBtn.addEventListener("click", () => {
  // links.classList.toggle("show-links");
  links.classList.toggle("show-links");
});

// footerBtn.addEventListener("click", () => {
//   // links.classList.toggle("show-links");
//   footerLinks.classList.toggle("show-footer-links");
// });

/*
  Always show the current year in the footer.
*/
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
