window.addEventListener("load", function() {
  const form = document.getElementsByClassName('form');

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
