import './popup.js';
import { deactivateAdForm, initListeners } from './form.js';
import { createSimilarAdverts } from './data.js';
import { initMap } from './map.js';

const similarAdverts = createSimilarAdverts();

deactivateAdForm();
initListeners();
initMap(similarAdverts);

export { similarAdverts }
