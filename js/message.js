import { isEscEvent } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const closeButton = document.querySelector('.error__button');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeMessage();
  }
};

const onClick = (evt) => {
  evt.preventDefault();
  removeMessage();
};

const showMessage = (message) => {
  document.body.appendChild(message);
  message.classList.remove('hidden');
  message.style.zIndex = '9999999';
  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  showMessage(successMessage);
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  showMessage(errorMessage);
  closeButton.addEventListener('click', onClick);
};

const removeMessage = () => {
  document.querySelectorAll('.success, .error').forEach((message) => message.remove());
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', onClick);
};

export { showSuccessMessage, showErrorMessage }
