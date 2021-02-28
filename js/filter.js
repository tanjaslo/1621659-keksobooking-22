const mapFilters = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');

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

export { deactivateFilterForm, activateFilterForm }
