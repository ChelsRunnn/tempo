const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passCheck = document.querySelector('#passCheck-signup').value.trim();
  const bio = document.querySelector('#bio-signup').value.trim();
  const profilePic = result.secure_url;

  if (firstName && email && password) {
    const response = await fetch('/api/users', {
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
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
