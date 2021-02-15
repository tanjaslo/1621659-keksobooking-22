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

const getHousingType = (type) => {
  switch (type) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
  }
};

const checkRoomsNumber = (rooms) => {
  if (rooms === 1 || rooms > 20 && rooms % 10 === 1 && rooms % 100 !== 11)
  { return rooms + ' комната'; }
  if (rooms >= 2 && rooms <= 4 || rooms % 10 >= 2 && rooms % 10 <=4 && rooms % 100 > 20)
  { return rooms + ' комнаты'; }
  else { return rooms + ' комнат'; }
};

const checkGuestsNumber = (guests) => {
  return guests === 1 || guests > 20 && guests % 10 === 1 && guests % 100 !== 11 ? guests + ' гостя' : guests + ' гостей';
};

export {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getRandomArray,
  getHousingType,
  checkRoomsNumber,
  checkGuestsNumber
};
