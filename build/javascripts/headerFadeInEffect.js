window.addEventListener("scroll", () => {
  headerFadeIn();
});

function headerFadeIn() {
  const headerFadeInTrigger = (window.innerHeight / 5) * 4;
  const headers = document.querySelectorAll(
    ".about-header, .header-projects, .header-contact"
  );

  headers.forEach((header) => {
    const headerPosition = header.getBoundingClientRect().top;

    if (
      headerPosition < headerFadeInTrigger &&
      !header.classList.contains("header-fade-in")
    ) {
      header.classList.add("header-fade-in");
    }
  });

  // if (Array.from(headers).every(header => header.classList.contains('header-fade-in'))) {
  //   window.removeEventListener('scroll', headerFadeIn);
  // }
}
