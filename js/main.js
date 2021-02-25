import './popup.js';
import { deactivateAdForm, initListeners } from './form.js';
import { initMap } from './map.js';

deactivateAdForm();
initListeners();

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((adverts) => {
    initMap(adverts);
});
