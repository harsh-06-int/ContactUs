document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const successMessage = document.getElementById('success-message');

  const validateEmail = email => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const clearErrors = () => {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    clearErrors();

    let hasError = false;

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      hasError = true;
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please enter your message.';
      hasError = true;
    }

    if (hasError) return;

    successMessage.textContent = 'Thanks! Your message has been sent successfully.';

    form.reset();
  });
});
