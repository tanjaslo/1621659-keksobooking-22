import { removeMarkers, setMarkers } from './map.js';

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');
const housingTypeFilter = mapFilters.querySelector('#housing-type');

const deactivateFilterForm = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.setAttribute('disabled', '');
  })
  mapFeatures.setAttribute('disabled', 'disabled');
};

const activateFilterForm = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.removeAttribute('disabled');
  })
  mapFeatures.removeAttribute('disabled');
};

const initTypeFilterListener = (adverts) => {
  housingTypeFilter.addEventListener('change', (evt) => {
    if (evt.target.value !== 'any') {
      removeMarkers();
      setMarkers(adverts
        .filter((advert) => advert.offer.type === evt.target.value));
    } else {
      setMarkers(adverts);
    }
  });
};

const initResetButtonListener = (adverts) => {
  const buttonReset = document.querySelector('.ad-form__reset');
  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();

    mapFilters.reset();
    removeMarkers();
    setMarkers(adverts);
  });
}

export { deactivateFilterForm, activateFilterForm, initTypeFilterListener, initResetButtonListener }
