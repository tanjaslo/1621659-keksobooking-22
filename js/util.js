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
  const housing = {
    palace: 'Дворец',
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
  }
  return housing[type];
};

const checkRoomsNumber = (rooms) => {
  const val = rooms.length % 10;
  const val2 = rooms.length % 100;
  if ([11, 12, 13, 14].includes(val2)) {
    return 'комнат';
  }
  if (val === 1) {
    return 'комната';
  }
  if ([2,3,4].includes(val)) {
    return 'комнаты';
  }
  return 'комнат';
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
