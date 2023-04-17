const form = document.getElementById('survey-form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get('name');
  const email = formData.get('email');
  const age = formData.get('age');
  const comments = formData.get('comments');

  // Do something with the form data, e.g. send it to a server using fetch()
}