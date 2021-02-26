import {showAlert} from './util.js';

const SERVER_GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const SERVER_POST_URL = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  return fetch(SERVER_GET_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные с сервера :(');
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    SERVER_POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData }