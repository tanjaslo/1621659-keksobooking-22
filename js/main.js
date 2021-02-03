'use strict';

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomIntInclusive = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(5, 10);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloatInclusive = (min, max, numbersAfterPoint) => {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numbersAfterPoint);
}
getRandomFloatInclusive(5.10, 5.2, 2);
