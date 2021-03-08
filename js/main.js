import './popup.js';
import './message.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { deactivateAdForm, initListeners, setAdFormSubmit, setAdFormReset } from './form.js';
import { initResetButtonListener, initFilterChangeListener } from './filter.js';

const ADVERTS_COUNT = 10;

deactivateAdForm();

getData((adverts) => {
  initMap(adverts.slice(0, ADVERTS_COUNT));
  initResetButtonListener(adverts);
  initFilterChangeListener(adverts);
});

initListeners();
setAdFormSubmit();
setAdFormReset();
