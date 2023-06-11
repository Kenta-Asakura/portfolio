
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const sidepanel = document.querySelector('.sidepanel');

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    document.querySelector(".navbar").classList.remove("hidden");
  } else {
    // Scrolling down
    sidepanel.classList.remove('show');
    document.querySelector(".navbar").classList.add("hidden");
  }

  prevScrollpos = currentScrollPos;
};
