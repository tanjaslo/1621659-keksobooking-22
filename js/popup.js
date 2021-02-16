import {createSimilarAdverts} from './data.js';
import {getHousingType, checkRoomsNumber, checkGuestsNumber} from './util.js';

const similarAdverts = createSimilarAdverts();

const renderSimilarAdverts = (similarAdverts) => {
  const map = document.querySelector('.map-canvas');
  const advertTemplate = document.querySelector('#card').content.querySelector('.popup');
  const mapFragment = document.createDocumentFragment();

  similarAdverts.forEach(({author, offer}) => {
    const advertElement = advertTemplate.cloneNode(true);

    advertElement.querySelector('.popup__title').textContent = offer.title;
    advertElement.querySelector('.popup__text--address').textContent = offer.address;
    advertElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    advertElement.querySelector('.popup__type').textContent = getHousingType(offer.type);
    advertElement.querySelector('.popup__text--capacity').textContent = `${checkRoomsNumber(offer.rooms)} для ${checkGuestsNumber(offer.guests)}`;
    advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    const featureList = advertElement.querySelector('.popup__features');
    featureList.innerHTML = '';
    offer.features.forEach(feature => {
      const featureElement = document.createElement('li');
      const featureClass = `popup__feature popup__feature--${feature}`;
      feature.classList.add(featureClass);
      featureList.appendChild(featureElement);
    });

    advertElement.querySelector('.popup__description').textContent = offer.description;

    const photoList = advertElement.querySelector('.popup__photos');
    photoList.innerHTML = '';
    offer.photos.forEach(photo => {
      const photoElement = document.createElement('img');
      photoElement.src = `${photo}`;
      photoList.appendChild(photoElement);
    });

    advertElement.querySelector('.popup__avatar').src = `${author.avatar}`;

    mapFragment.appendChild(advertElement);
  });
  map.appendChild(mapFragment);
};

renderSimilarAdverts(similarAdverts);

export { renderSimilarAdverts }
