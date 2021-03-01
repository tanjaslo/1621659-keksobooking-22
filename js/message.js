import { isEscEvent } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessage = successTemplate.cloneNode(true);
const errorMessage = errorTemplate.cloneNode(true);
const closeButton = errorMessage.querySelector('.error__button');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    if (successMessage) {
      removeSuccessMessage();
    }
    removeErrorMessage();
  }
};

const onClick = (evt) => {
  evt.preventDefault();
  removeSuccessMessage();
  removeErrorMessage();
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
  if (closeButton) {
    closeButton.addEventListener('click', onClick);
  }
};

const removeMessage = (message) => {
  message.classList.add('hidden');
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const removeSuccessMessage = () => {
  removeMessage(successMessage);
};

const removeErrorMessage = () => {
  removeMessage(errorMessage);
  if (closeButton) {
    closeButton.removeEventListener('click', onClick);
  }
};

export { showSuccessMessage, showErrorMessage }
