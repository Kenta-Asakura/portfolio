document.addEventListener("DOMContentLoaded", function() {
  let bannerLeft = document.querySelector('.banner-left');
  let bannerRight = document.querySelector('.banner-right');

  setTimeout(function() {
    if (bannerLeft) {
      bannerLeft.classList.add('fade-in');
    }
    if (bannerRight) {
      bannerRight.classList.add('fade-in');
    }
  }, 100);
});
