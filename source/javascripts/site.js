// all js here

// hide navbar on scroll down
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    document.querySelector(".navbar").classList.remove("hidden");
  } else {
    // Scrolling down
    document.querySelector(".navbar").classList.add("hidden");
  }

  prevScrollpos = currentScrollPos;
};

// projects slide in animation
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


// Contact form prevent redirecting
window.addEventListener("load", function() {
  const form = document.getElementById('form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Your message has been sent!");
    })
  });
});
