const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');
const address = document.querySelector('#address');
const typeList = document.querySelector('#type');
const price = document.querySelector('#price');
const checkInList = document.querySelector('#timein');
const checkOutList = document.querySelector('#timeout');

const HOUSING_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('.ad-form fieldset').forEach((fieldset) => {
    fieldset.setAttribute('disabled', 'disabled');
  })
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.setAttribute('disabled', '');
  })
  mapFeatures.setAttribute('disabled', 'disabled');
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('.ad-form fieldset').forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  })
  address.setAttribute('readonly', 'readonly');
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.removeAttribute('disabled');
  })
  mapFeatures.removeAttribute('disabled');
};

const getHousingPrice = (type) => {
  return HOUSING_PRICE[type];
};

const initListeners = () => {
  typeList.addEventListener('change', () => {
    price.placeholder = getHousingPrice(typeList.value);
  });

  checkInList.addEventListener('change', () => {
    checkOutList.value = checkInList.value;
  });

  checkOutList.addEventListener('change', () => {
    checkInList.selectedIndex = checkOutList.selectedIndex;
  });
};

export { address, deactivateAdForm, activateAdForm, initListeners }
