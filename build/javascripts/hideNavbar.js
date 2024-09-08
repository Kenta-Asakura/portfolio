let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const mainNav = document.querySelector('.main-nav');
  const sidepanel = document.querySelector('.sidepanel');

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    mainNav.classList.remove("main-nav--hidden");
  } else {
    // Scrolling down
    sidepanel.classList.remove('show');
    mainNav.classList.add("main-nav--hidden");
  }

  prevScrollpos = currentScrollPos;
};
