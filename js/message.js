import { isEscEvent } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const messageSuccess = successTemplate.cloneNode(true);
const messageError = errorTemplate.cloneNode(true);

const closeMessage = (message) => {
  message.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown(message));
  document.removeEventListener('click', onClick(message));
};

const onPopupEscKeydown = (message) => {
  return (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMessage(message);
    }
  }
};

const onClick = (message) => {
  return (evt) => {
    evt.preventDefault();
    closeMessage(message);
  }
};

const showSuccessMessage = () => {
  document.body.appendChild(messageSuccess);
  messageSuccess.classList.remove('hidden');
  messageSuccess.style.zIndex = '9999999';
  document.addEventListener('click', onClick(messageSuccess));
  document.addEventListener('keydown', onPopupEscKeydown(messageSuccess));
};

const showErrorMessage = () => {
  const buttonClose = messageError.querySelector('.error__button');
  document.body.appendChild(messageError);
  messageError.classList.remove('hidden');
  messageError.style.zIndex = '9999999';
  buttonClose.addEventListener('click', onClick(messageError));
  document.addEventListener('click', onClick(messageError));
  document.addEventListener('keydown', onPopupEscKeydown(messageError));
};

export { showSuccessMessage, showErrorMessage }
