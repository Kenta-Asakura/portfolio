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

  // function projects_slidein() {
  //   console.log(window.innerHeight);
  // }

  // projects_slidein();
});



window.addEventListener('scroll', () => {
  projectLeftSlideIn();
});

function projectLeftSlideIn() {
  const projectsLeft = document.querySelectorAll('.project-left')
  const projectsRight = document.querySelectorAll('.project-right')
  const triggerBottom = window.innerHeight / 5 * 4;
  // console.log(triggerBottom);

  projectsLeft.forEach((project) => {
    const projectLeftTop = project.getBoundingClientRect().top;

    console.log(projectLeftTop);
    if (projectLeftTop < triggerBottom) {
      project.classList.add('show');
    } else {
      project.classList.remove('show')
    }
  });

  projectsRight.forEach((project) => {
    const projectRightTop = project.getBoundingClientRect().top;
    // console.log(projectRightTop);

    if (projectRightTop < triggerBottom) {
      project.classList.add('show');
    } else {
      project.classList.remove('show')
    }
  });
}
