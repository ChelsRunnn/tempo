const projectFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-description').value.trim();

  if (firstName && email && password) {
    const response = await fetch('/api/projects/', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password,  }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.project-form')
  .addEventListener('submit', projectFormHandler);

