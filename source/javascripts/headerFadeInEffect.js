window.addEventListener('scroll', () => {
  headerFadeIn();
});

function headerFadeIn() {
  const aboutMeHeader = document.querySelector('.header-about-me');
  const projectsHeader = document.querySelector('.header-projects');
  const contactHeader = document.querySelector('.header-contact');
  const headerFadeInTrigger = window.innerHeight / 5 * 4;
a
  const aboutMePosition = aboutMeHeader.getBoundingClientRect();
  const projectsPosition = projectsHeader.getBoundingClientRect();
  const contactPosition = contactHeader.getBoundingClientRect();

  if (aboutMePosition < headerFadeInTrigger) {
    aboutMeHeader.classList.add('header-fade-in');
  }
  if (projectsPosition < headerFadeInTrigger) {
    projectsHeader.classList.add('header-fade-in');
  }
  if (contactPosition < headerFadeInTrigger) {
    contactHeader.classList.add('header-fade-in');
  }
}

// const projectsHeader = document.querySelector('.header-projects');
// const contactHeader = document.querySelector('.header-contact');
// const headerFadeInTrigger = window.innerHeight / 5 * 4;

// window.addEventListener('scroll', () => {
//   headerFadeIn();
// });

// function headerFadeIn() {
//   const aboutMePosition = aboutMeHeader.getBoundingClientRect();
//   const projectsPosition = projectsHeader.getBoundingClientRect();
//   const contactPosition = contactHeader.getBoundingClientRect();

//   if (aboutMePosition.top < headerFadeInTrigger && !aboutMeHeader.classList.contains('header-fade-in')) {
//     aboutMeHeader.classList.add('header-fade-in');
//   }
//   if (projectsPosition.top < headerFadeInTrigger && !projectsHeader.classList.contains('header-fade-in')) {
//     projectsHeader.classList.add('header-fade-in');
//   }
//   if (contactPosition.top < headerFadeInTrigger && !contactHeader.classList.contains('header-fade-in')) {
//     contactHeader.classList.add('header-fade-in');
//   }
// }
