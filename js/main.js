import './popup.js';
import './message.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { showAlert } from './util.js';
import { deactivateAdForm, initListeners, setAdFormSubmit, setAdFormReset } from './form.js';
import { initResetButtonListener, initFilterChangeListener } from './filter.js';

getData((adverts) => {
  initMap(adverts);
  initResetButtonListener(adverts);
  initFilterChangeListener(adverts);
},
() => {
  deactivateAdForm();
  showAlert('Не удалось загрузить данные с сервера :(')
});

initListeners();
setAdFormSubmit();
setAdFormReset();


