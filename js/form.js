const HOUSING_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const getHousingPrice = (type) => {
  return HOUSING_PRICE[type];
};

const typeList = document.querySelector('#type');
const price = document.querySelector('#price');
const checkInList = document.querySelector('#timein');
const checkOutList = document.querySelector('#timeout');

typeList.addEventListener('change', () => {
  for (let i = 0; i < typeList.options.length; i++) {
    if (typeList.options[i].selected) {
      price.placeholder = getHousingPrice(typeList.options[i].value);
    }
  }
});

checkInList.addEventListener('change', function () {
  for (let i = 0; i < checkInList.options.length; i++) {
    if (checkInList.options[i].selected) {
      checkOutList.options[i].setAttribute('selected', true);
      checkOutList.options[i].value = checkInList.options[i].value;
    }
  }
});

checkOutList.addEventListener('change', function () {
  for (let i = 0; i < checkOutList.options.length; i++) {
    if (checkOutList.options[i].selected) {
      checkInList.options[i].setAttribute('selected', true);
      checkInList.options[i].value = checkOutList.options[i].value;
    }
  }
});
