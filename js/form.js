import { MAX_ROOMS_NUMBER } from './data.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { setAddress, resetMainMarker } from './map.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');
const address = document.querySelector('#address');
const typeList = document.querySelector('#type');
const price = document.querySelector('#price');
const checkInList = document.querySelector('#timein');
const checkOutList = document.querySelector('#timeout');
const advertTitle = document.querySelector('#title');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');
const optionCapacity = roomCapacity.querySelectorAll('option');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

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
    price.min = getHousingPrice(typeList.value);
  });

  checkInList.addEventListener('change', () => {
    checkOutList.value = checkInList.value;
  });

  checkOutList.addEventListener('change', () => {
    checkInList.selectedIndex = checkOutList.selectedIndex;
  });

  advertTitle.addEventListener('input', () => {
    const valueLength = advertTitle.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      advertTitle.setCustomValidity(`Ещё ${(MIN_TITLE_LENGTH - valueLength)} симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      advertTitle.setCustomValidity(`Удалите лишние ${(valueLength - MAX_TITLE_LENGTH)} симв.`);
    } else {
      advertTitle.setCustomValidity('');
    }
    advertTitle.reportValidity();
  });

  price.addEventListener('invalid', () => {
    if (price.validity.valueMissing) {
      price.setCustomValidity('Это поле обязательно для заполнения');
    } else if (price.value < price.min) {
      price.setCustomValidity(`Стоимость должна быть не менее ${price.min}`);
    } else {
      price.setCustomValidity('');
    }
    price.reportValidity();
  });

  roomNumber.addEventListener('change', () => {
    if (Number(roomNumber.value) === MAX_ROOMS_NUMBER) {
      roomCapacity.selectedIndex = 0;
      optionCapacity.forEach((option) => {
        option.disabled = option.value > roomCapacity.selectedIndex;
      });
    } else {
      roomCapacity.selectedIndex = roomNumber.value;
      optionCapacity.forEach((option, index) => {
        option.disabled = index === 0 || option.value > roomNumber.value;
      });
    }
  });
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showSuccessMessage();
        adForm.reset();
        resetMainMarker();
        setAddress();
      },
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const setAdFormReset = () => {
  const buttonReset = adForm.querySelector('.ad-form__reset');
  buttonReset.addEventListener('click', () => {
    adForm.reset();
    resetMainMarker();
    setAddress();
  })
};

export { address, deactivateAdForm, activateAdForm, initListeners, setAdFormSubmit, setAdFormReset }
