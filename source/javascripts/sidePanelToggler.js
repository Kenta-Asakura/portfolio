document.addEventListener("DOMContentLoaded", function() {

  const navbarMenuIcon = document.querySelector('.navbar-menu-icon');
  const sidepanel = document.querySelector('.sidepanel');
  const closeIcon = document.querySelector('.close-icon');

  navbarMenuIcon.addEventListener('click', () => {
    sidepanel.classList.toggle('show');
  });

  closeIcon.addEventListener('click', () => {
    sidepanel.classList.remove('show');
  });
});
