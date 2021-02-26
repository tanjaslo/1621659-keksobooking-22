import './popup.js';
import { deactivateAdForm, initListeners, setAdFormSubmit, setAdFormReset } from './form.js';
import { getData } from './api.js';
import { initMap } from './map.js';

deactivateAdForm();
initListeners();

getData((adverts) => {
  initMap(adverts);
});

setAdFormSubmit();
setAdFormReset();
