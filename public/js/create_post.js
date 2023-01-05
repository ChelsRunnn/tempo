const postFormHandler = async (event) => {
  event.preventDefault();

  const captionEl = document.querySelector('#post-caption');
  const mediaEl = document.querySelector('#post-media');
  const urlEl = document.querySelector('#post-media-url');

  const caption = captionEl ? captionEl.value.trim() : null;
  const media = mediaEl ? mediaEl.value.trim() : null;
  const media_url = urlEl ? urlEl.value.trim() : null;

  if (caption || media_url) {
    const response = await fetch('/api/posts', {
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
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
