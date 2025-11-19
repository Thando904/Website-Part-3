document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault(); // Prevent default form submission

      // Select form fields
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('textarea');

      // Remove previous errors
      [name, email, message].forEach(field => field.classList.remove('error'));
      form.querySelectorAll('.error-message').forEach(el => el.remove());

      let valid = true;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

      // Name validation
      if (!name.value.trim()) {
        showError(name, "Name is required");
        valid = false;
      }

      // Email validation
      if (!emailRegex.test(email.value.trim())) {
        showError(email, "Valid email is required");
        valid = false;
      }

      // Message validation
      if (!message.value.trim()) {
        showError(message, "Message cannot be empty");
        valid = false;
      }

      // Focus the first invalid field
      if (!valid) {
        const firstError = form.querySelector('.error');
        firstError.focus();
        return;
      }

      // Simulate form submission
      alert("Form submitted successfully!");
      form.reset();
    });
  });

  // Function to show error message
  function showError(field, message) {
    field.classList.add('error');
    const span = document.createElement('span');
    span.className = 'error-message';
    span.textContent = message;
    span.style.color = '#c84b31';
    span.style.fontSize = '0.9rem';
    span.style.display = 'block';
    span.style.marginTop = '5px';
    field.after(span);
  }
});

