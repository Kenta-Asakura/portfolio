// all js here

// hide navbar on scroll down
let navbar = document.querySelector('.navbar');
// tells where Y axis you are (numbers in px)
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  let navbar = document.querySelector('.navbar');
  if (lastScrollY < window.scrollY) {
    // console.log('we are going down');
    navbar.classList.add("navbar-hidden");
  } else {
    // console.log('we are going up');
    navbar.classList.remove("navbar-hidden");
  }

  // resets scroll value
  lastScrollY = window.scrollY;
});
