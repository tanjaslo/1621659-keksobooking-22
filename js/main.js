'use strict';

const OFFER_TITLES = [
  'Private room in guesthouse Soul',
  'Riverbank apartment',
  'Villa Sakura',
  'Chalet Hidden gem',
];

const OFFER_DESCRIPTIONS = [
  'Clean and cosy private room in the center of Tokyo. Accommodation has a dining area, a flat-screen TV and a private bathroom with shower and a hairdryer.',
  'This accommodation is situated on Gyotoku Riverbank in 300 metres from all local attractions. The apartment offers a children\'s playground. Fishing and hiking can be enjoyed nearby.',
  'In the heart of Tokyo, set within a short distance of Ruins of Takanawa Okido Gate and Shinsei Temple, this property is a renovated Japanese townhouse fitted with air conditioning and free WiFi. Guests can also relax in the shared lounge area. Free private parking is available.',
  'Suitable location in an area where guests can engage in activities such as hiking and cycling. This air-conditioned property is composed of 2 separate bedrooms, a living room, a fully equipped kitchen with a microwave and fridge, and 1 bathroom.',
];

const HOUSING_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const xMin = 35.65000;
const xMax = 35.70000;
const yMin = 139.70000;
const yMax = 139.80000;

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloatInclusive = (min, max, numbersAfterPoint) => {
  if (min >= max || min < 0 || max < 0) {
    return null;
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numbersAfterPoint);
};

// Функция, возвращающая случайный элемент массива.
const getRandomArrayElement = (elements) => {
  const randomArrayIndex = getRandomIntInclusive(0, elements.length - 1);
  return elements[randomArrayIndex];
};

// Тасование Фишера — Йетса https://learn.javascript.ru/task/shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Функция, возвращающая массив случайной длины из значений массива (значения исходного массива предварительно тасуются).
const getRandomArray = (newArray) => {
  const randomArrayIndex = getRandomIntInclusive(0, newArray.length - 1);
  shuffle(newArray);
  return newArray.slice(randomArrayIndex);
};

/*
// Функция, возвращающая массив случайной длины из значений, без перемешивания исходного массива, в.1.

const getRandomArray = (array) => {
  let newArray = [];
  array.forEach((element) => {
    if (getRandomIntInclusive(0, 1)) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}

// Функция, возвращающая массив случайной длины из значений, без перемешивания исходного массива, в.2.

const getRandomArray = (array) => {
  const randomArrayIndex = getRandomIntInclusive(0, array.length - 1);
  return array.slice(randomArrayIndex);
};
*/

const getRandomLocation = () => {
  const x = getRandomFloatInclusive(xMin, xMax, 5);
  const y = getRandomFloatInclusive(yMin, yMax, 5);
  return Number(x) + ', ' + Number(y);
};

const SIMILAR_OFFER_COUNT = 10;

const createOffer = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: getRandomLocation(),
      price: getRandomIntInclusive(10,2000),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandomIntInclusive(1,200),
      guests: getRandomIntInclusive(1,450),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: +getRandomFloatInclusive(35.65000, 35.70000, 5),
      y: +getRandomFloatInclusive(139.70000, 139.80000, 5),
    },
  };
};

const createSimilarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
