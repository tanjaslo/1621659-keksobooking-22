import { markers, setAllMarkers } from './map.js';

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

const setFilteredMarkers = (adverts) => {
  housingTypeFilter.addEventListener('change', (evt) => {
    if (evt.target.value !== 'any') {
      markers.forEach(marker => {
        marker.remove();
      });
      setAllMarkers(adverts
        .filter((advert) => advert.offer.type === evt.target.value));
    } else {
      setAllMarkers(adverts);
    }
  });
};

export { deactivateFilterForm, activateFilterForm, setFilteredMarkers }
