import { removeMarkers, setMarkers } from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');
const mapFilters = mapFiltersForm.querySelectorAll('.map__filter')
const mapFeatures = document.querySelector('.map__features');
const housingTypeFilter = mapFiltersForm.querySelector('#housing-type');

const deactivateFilterForm = () => {
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.setAttribute('disabled', '');
  })
  mapFeatures.setAttribute('disabled', 'disabled');
};

const activateFilterForm = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFilters.forEach((filter) => {
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

    mapFiltersForm.reset();
    removeMarkers();
    setMarkers(adverts);
  });
}

export { deactivateFilterForm, activateFilterForm, initTypeFilterListener, initResetButtonListener }
