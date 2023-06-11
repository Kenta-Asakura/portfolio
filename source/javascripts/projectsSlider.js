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

    // console.log(projectLeftTop);
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
