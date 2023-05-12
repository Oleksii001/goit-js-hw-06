const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', function() {
  const enteredValue = inputEl.value;
  const expectedLength = inputEl.getAttribute('data-length');

  if (enteredValue.length === Number (expectedLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});

