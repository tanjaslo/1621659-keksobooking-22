import './popup.js';
import './message.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { deactivateAdForm, initListeners, setAdFormSubmit, setAdFormReset } from './form.js';
import { initResetButtonListener, initFilterChangeListener } from './filter.js';

deactivateAdForm();

getData((adverts) => {
  initMap(adverts);
  initResetButtonListener(adverts);
  initFilterChangeListener(adverts);
});

initListeners();
setAdFormSubmit();
setAdFormReset();
