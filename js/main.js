import './popup.js';
import { deactivateAdForm, initListeners, setAdFormSubmit, setAdFormReset } from './form.js';
import { getData } from './api.js';
import { initMap } from './map.js';

const ADVERTS_COUNT = 10;

deactivateAdForm();

getData((adverts) => {
  initMap(adverts.slice(0, ADVERTS_COUNT));
});

initListeners();
setAdFormSubmit();
setAdFormReset();
