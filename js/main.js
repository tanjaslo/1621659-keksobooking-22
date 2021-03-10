import './popup.js';
import './message.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { showAlert } from './util.js';
import { deactivateAdForm, initListeners, setFormValidity, setAdFormSubmit, setAdFormReset } from './form.js';
import { initResetButtonListener, initFilterChangeListener } from './filter.js';

const ADVERTS_COUNT = 10;

getData((adverts) => {
  initMap(adverts.slice(0, ADVERTS_COUNT));
  initResetButtonListener(adverts);
  initFilterChangeListener(adverts);
},
(error) => {
  deactivateAdForm();
  showAlert(error)
});

initListeners();
setFormValidity();
setAdFormSubmit();
setAdFormReset();


