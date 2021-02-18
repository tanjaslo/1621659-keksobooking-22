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
  price.placeholder = getHousingPrice(typeList.value);
});

checkInList.addEventListener('change', () => {
  checkOutList.value = checkInList.value;
});

checkOutList.addEventListener('change', () => {
  checkInList.selectedIndex = checkOutList.selectedIndex;
});
