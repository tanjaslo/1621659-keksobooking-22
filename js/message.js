import { isEscEvent } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessage = successTemplate.cloneNode(true);
const errorMessage = errorTemplate.cloneNode(true);
const closeButton = errorMessage.querySelector('.error__button');

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
  showMessage(successMessage);
};

const showErrorMessage = () => {
  showMessage(errorMessage);
  closeButton.addEventListener('click', onClick);
};

const removeMessage = () => {
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onPopupEscKeydown);

  if (successMessage) {
    successMessage.classList.add('hidden');
  }
  errorMessage.classList.add('hidden');
  closeButton.removeEventListener('click', onClick);
};

export { showSuccessMessage, showErrorMessage }
