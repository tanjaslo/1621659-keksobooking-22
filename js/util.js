const ALERT_SHOW_TIME = 5000;
// const ESC = 'Escape';

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const getRandomIntInclusive = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatInclusive = (min, max, numbersAfterPoint) => {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numbersAfterPoint);
};

const getRandomArrayElement = (elements) => {
  const randomArrayIndex = getRandomIntInclusive(0, elements.length - 1);
  return elements[randomArrayIndex];
};

const getRandomArray = (array) => {
  const randomArrayIndex = getRandomIntInclusive(0, array.length - 1);
  return array.sort(() => Math.random() > 0.5 ? 1 : -1).slice(randomArrayIndex);
};

// пока поставила свой первый вариант функции для опеределения окончаний, т.к. твой вариант не работает корректно, позже разберусь
const checkRoomsNumber = (rooms) => {
  if (rooms === 1 || rooms > 20 && rooms % 10 === 1 && rooms % 100 !== 11) {
    return rooms + ' комната';
  }
  if (rooms >= 2 && rooms <= 4 || rooms % 10 >= 2 && rooms % 10 <=4 && rooms % 100 > 20) {
    return rooms + ' комнаты';
  } else {
    return rooms + ' комнат';
  }
};
/* TODO
const checkRoomsNumber = (rooms) => {
  const val = rooms.length % 10;
  const val2 = rooms.length % 100;
  if ([11, 12, 13, 14].includes(val2)) {
    return rooms + ' комнат';
  }
  if (val === 1) {
    return rooms + ' комната';
  }
  if ([2,3,4].includes(val)) {
    return rooms + ' комнаты';
  }
  return rooms + ' комнат';
};
*/

const checkGuestsNumber = (guests) => {
  return guests === 1 || guests > 20 && guests % 10 === 1 && guests % 100 !== 11 ? guests + ' гостя' : guests + ' гостей';
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = 9999;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '28px';
  alertContainer.style.fontStyle = 'Tahoma';
  alertContainer.style.color = '#ffffff';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getRandomArray,
  checkRoomsNumber,
  checkGuestsNumber,
  showAlert,
  //ESC,
  isEscEvent
};
