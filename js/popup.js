import {createSimilarAdverts} from './data.js';
import {getHousingType, checkRoomsNumber, checkGuestsNumber} from './utils.js';

const map = document.querySelector('#map-canvas');
const advertTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAdverts = createSimilarAdverts();
const advertFragment = document.createDocumentFragment();

similarAdverts.forEach((author, offer) => {
  const advert = advertTemplate.cloneNode(true);
  const featureList = advert.querySelector('.popup__features');
  const photoList = advert.querySelector('.popup__photos');

  advert.querySelector('.popup__title').textContent = offer.title;
  advert.querySelector('.popup__text--address').textContent = offer.address;
  advert.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advert.querySelector('.popup__type').textContent = getHousingType(offer.type);
  advert.querySelector('.popup__text--capacity').textContent = `${checkRoomsNumber(offer.rooms)} для ${checkGuestsNumber(offer.guests)}`;
  advert.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  featureList.innerHTML = '';
  offer.features.forEach(feature => {
    const featureElement = document.createElement('li');
    const featureClass = `popup__feature popup__feature--${feature}`;
    feature.classList.add(featureClass);
    featureList.appendChild(featureElement);
  });

  advert.querySelector('.popup__description').textContent = offer.description;

  photoList.innerHTML = '';
  offer.photos.forEach(photo => {
    const photoElement = document.createElement('img');
    photoElement.src = `${photo}`;
    photoList.appendChild(photoElement);
  });

  advert.querySelector('.popup__avatar').src = `${author.avatar}`;

  advertFragment.appendChild(advert);
});
map.appendChild(advertFragment);

const renderAdvertisment = (parentElement, advertisement) => {
  const card = similarAdverts(advertisement);
  parentElement.append(card);
}
renderAdvertisment(map, similarAdverts[0]);

export { renderAdvertisment }
