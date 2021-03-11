import 'leaflet/dist/leaflet.css';
import './message.js';
import './popup.js';
import './photo.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { showAlert } from './util.js';
import { initResetButtonListener, initFilterChangeListener } from './filter.js';
import { deactivateAdForm, initListeners, setFormValidity, setAdFormSubmit, setAdFormReset } from './form.js';

getData((adverts) => {
  initMap(adverts);
  initResetButtonListener(adverts);
  initFilterChangeListener(adverts);
},
(error) => {
  deactivateAdForm();
  showAlert(error);
});

initListeners();
setFormValidity();
setAdFormSubmit();
setAdFormReset();


