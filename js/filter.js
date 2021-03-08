import { removeMarkers, setMarkers } from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');
const mapFilters = mapFiltersForm.querySelectorAll('.map__filter')
const mapFeatures = document.querySelector('.map__features');
const housingTypeFilter = mapFiltersForm.querySelector('#housing-type');
const housingPriceFilter = mapFiltersForm.querySelector('#housing-price');
const housingRoomsFilter = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsFilter = mapFiltersForm.querySelector('#housing-guests');

const PRICE_LOW = 10000;
const PRICE_HIGH = 50000;

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

const initResetButtonListener = (adverts) => {
  const buttonReset = document.querySelector('.ad-form__reset');
  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();

    mapFiltersForm.reset();
    removeMarkers();
    setMarkers(adverts);
  });
}

const featuresFilter = (advert) => {
  const checkedFeatures = mapFiltersForm.querySelectorAll('.map__checkbox:checked');
  let advertFeatures = [];
  checkedFeatures.forEach((feature) => {
    if (advert.offer.features.includes(feature.value))
      advertFeatures.push(advert);
  })
  return advertFeatures.length === checkedFeatures.length;
};

const typeFilter  = (advert) => {
  return housingTypeFilter.value === 'any' || advert.offer.type === housingTypeFilter.value;
};

const roomsFilter = (advert) => {
  return housingRoomsFilter.value === 'any' || advert.offer.rooms === Number(housingRoomsFilter.value);
};

const capacityFilter = (advert) => {
  if (housingGuestsFilter.value !== 'any') {
    return advert.offer.guests === Number(housingGuestsFilter.value);
  }
  return true;
};

const priceFilter = (advert) => {
  const filterPrice = housingPriceFilter.value;
  const advertPrice = advert.offer.price;

  switch (filterPrice) {
    case 'middle': return advertPrice >= PRICE_LOW && advertPrice < PRICE_HIGH;
    case 'low': return advertPrice < PRICE_LOW;
    case 'high': return advertPrice >= PRICE_HIGH;
    default: return true;
  }
};

const getFilteredAdverts = (adverts) => {
  const filteredAdverts = adverts.filter((advert) => {
    return (
      featuresFilter(advert) &&
      roomsFilter(advert) &&
      capacityFilter(advert) &&
      priceFilter(advert) &&
      typeFilter(advert)
    )
  })
  return filteredAdverts;
};

const initFilterChangeListener = (adverts) => {
  mapFiltersForm.addEventListener('change', () => {
    const filteredAdverts = getFilteredAdverts(adverts);
    removeMarkers();
    setMarkers(filteredAdverts);
  })
};

export { deactivateFilterForm, activateFilterForm, initResetButtonListener, initFilterChangeListener }
