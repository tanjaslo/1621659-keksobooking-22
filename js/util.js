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

export {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getRandomArray
};
