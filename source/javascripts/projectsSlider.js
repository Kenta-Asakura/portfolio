window.addEventListener('scroll', () => {
  projectSlideIn();
});

function projectSlideIn() {
  const projectsLeft = document.querySelectorAll('.project-left')
  const projectsRight = document.querySelectorAll('.project-right')
  const triggerBottom = window.innerHeight / 5 * 4;

  projectsLeft.forEach((project) => {
    const projectLeftTop = project.getBoundingClientRect().top;

    if (projectLeftTop < triggerBottom) {
      project.classList.add('project-left--visible');
    } else {
      project.classList.remove('project-left--visible')
    }
  });

  projectsRight.forEach((project) => {
    const projectRightTop = project.getBoundingClientRect().top;

    if (projectRightTop < triggerBottom) {
      project.classList.add('project-right--visible');
    } else {
      project.classList.remove('project-right--visible')
    }
  });
}
