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
