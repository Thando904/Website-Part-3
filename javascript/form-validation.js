document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const msg = form.querySelector('textarea');

      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let valid = true;
      [name, email, msg].forEach(el => el.classList.remove('error'));

      if (!name.value.trim()) { name.classList.add('error'); valid = false; }
      if (!re.test(email.value)) { email.classList.add('error'); valid = false; }
      if (!msg.value.trim()) { msg.classList.add('error'); valid = false; }

      if (valid) {
        alert("Form submitted successfully (simulation).");
        form.reset();
      } else {
        alert("Please correct the highlighted fields.");
      }
    });
  });
});
