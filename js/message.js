import { ESC } from './util.js';

const main = document.querySelector('.main');

const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageSuccess = successTemplate.cloneNode(true);
  main.appendChild(messageSuccess);
  messageSuccess.style.zIndex = '999';

  messageSuccess.addEventListener('click', () => {
    messageSuccess.remove();
  })
  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC) {
      messageSuccess.remove();
    }
  })
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageError = errorTemplate.cloneNode(true);
  const buttonClose = messageError.querySelector('.error__button');
  main.appendChild(messageError);
  messageError.style.zIndex = '999';

  buttonClose.addEventListener('click', () => {
    messageError.remove();
  })
  messageError.addEventListener('click', () => {
    messageError.remove();
  })
  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC) {
      messageError.remove();
    }
  })
};

export { showSuccessMessage, showErrorMessage }
