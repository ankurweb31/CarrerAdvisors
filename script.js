// // Hamburger Menu Functionality
// const hamburger = document.getElementById('hamburger');
// const hamburgerMenu = document.getElementById('hamburgerMenu');

// hamburger.addEventListener('click', () => {
//     hamburgerMenu.style.display === 'none' || hamburgerMenu.style.display === ''
//         ? hamburgerMenu.style.display = 'flex'
//         : hamburgerMenu.style.display = 'none';
// });

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// Hamburger Menu Functionality
const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburger.addEventListener("click", () => {
  hamburgerMenu.style.display === "none" || hamburgerMenu.style.display === ""
    ? (hamburgerMenu.style.display = "flex")
    : (hamburgerMenu.style.display = "none");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
