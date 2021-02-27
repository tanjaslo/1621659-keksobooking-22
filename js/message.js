import { isEscEvent } from './util.js';

const main = document.querySelector('.main');
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
  main.appendChild(messageSuccess);
  messageSuccess.classList.remove('hidden');
  document.addEventListener('click', onClick(messageSuccess));
  document.addEventListener('keydown', onPopupEscKeydown(messageSuccess));
};

const showErrorMessage = () => {
  const buttonClose = messageError.querySelector('.error__button');
  main.appendChild(messageError);
  messageError.classList.remove('hidden');
  buttonClose.addEventListener('click', onClick(messageError));
  document.addEventListener('click', onClick(messageError));
  document.addEventListener('keydown', onPopupEscKeydown(messageError));
};

export { showSuccessMessage, showErrorMessage }
