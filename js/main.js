// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(min, max);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloatInclusive(min, max, numbersAfterPoint) {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numbersAfterPoint);
}
getRandomFloatInclusive(min, max, numbersAfterPoint);
