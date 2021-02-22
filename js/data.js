import {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getRandomArray
} from './util.js';

const ADVERT_TITLES = [
  'Private room in guesthouse Soul',
  'Riverbank apartment',
  'Villa Sakura',
  'Chalet Hidden gem',
];

const ADVERT_DESCRIPTIONS = [
  'Clean and cosy private room in the center of Tokyo.',
  'This accommodation is situated on Gyotoku Riverbank in 300 metres from all local attractions.',
  'This property is a renovated Japanese townhouse in the heart of Tokyo',
  'Suitable location in an area where guests can engage in activities such as hiking and cycling.',
];

const HOUSING_TYPES = [
  'bungalow',
  'flat',
  'house',
  'palace',
];

const HOUSING = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
};

const getHousingType = (type) => {
  return HOUSING[type];
};

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

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 8;
const MIN_PRICE = 10;
const MAX_PRICE = 1000000;
const MIN_ROOMS_NUMBER = 1;
const MAX_ROOMS_NUMBER = 10;
const MIN_GUESTS_NUMBER = 1;
const MAX_GUESTS_NUMBER = 30;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;
const LOCATION_FLOAT = 5;
const SIMILAR_ADVERT_COUNT = 10;

const createAdvert = () => {
  const locationX = getRandomFloatInclusive(MIN_LATITUDE, MAX_LATITUDE, LOCATION_FLOAT);
  const locationY = getRandomFloatInclusive(MIN_LONGITUDE, MAX_LONGITUDE, LOCATION_FLOAT);
  const advert = {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.png`,
    },
    offer: {
      title: getRandomArrayElement(ADVERT_TITLES),
      address: `${locationX}, ${locationY}`,
      price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandomIntInclusive(MIN_ROOMS_NUMBER, MAX_ROOMS_NUMBER),
      guests: getRandomIntInclusive(MIN_GUESTS_NUMBER, MAX_GUESTS_NUMBER),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(ADVERT_DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
  return advert;
};

const createSimilarAdverts = () => new Array(SIMILAR_ADVERT_COUNT).fill(null).map(createAdvert);

export { MAIN_LATITUDE, MAIN_LONGITUDE, LOCATION_FLOAT, MIN_PRICE, MAX_PRICE, getHousingType, createSimilarAdverts }
