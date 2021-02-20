import './popup.js';
import { deactivateAdForm, initListeners } from './form.js';
import { createSimilarAdverts } from './data.js';
import { initMap } from './map.js';

deactivateAdForm();
initListeners();
initMap();

const similarAdverts = createSimilarAdverts();

export { similarAdverts }
