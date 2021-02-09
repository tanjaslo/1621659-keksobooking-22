import {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getRandomArray
} from './util.js';

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

const MIN_PRICE = 10;
const MAX_PRICE = 1000000;
const MIN_ROOMS_NUMBER = 1;
const MAX_ROOMS_NUMBER = 20;
const MIN_GUESTS_NUMBER = 1;
const MAX_GUESTS_NUMBER = 60;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const LOCATION_FLOAT = 5;
const SIMILAR_OFFER_COUNT = 10;

const createOffer = () => {
  const locationX = getRandomFloatInclusive(MIN_LATITUDE, MAX_LATITUDE, LOCATION_FLOAT);
  const locationY = getRandomFloatInclusive(MIN_LONGITUDE, MAX_LONGITUDE, LOCATION_FLOAT);
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: `${locationX}, ${locationY}`,
      price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandomIntInclusive(MIN_ROOMS_NUMBER, MAX_ROOMS_NUMBER),
      guests: getRandomIntInclusive(MIN_GUESTS_NUMBER, MAX_GUESTS_NUMBER),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};
const createSimilarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
createSimilarOffers;
