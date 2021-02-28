/* global L:readonly */
import { address, activateAdForm } from './form.js';
import { createAdvertElement } from './popup.js';

const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;
const LOCATION_FLOAT = 5;
const MAIN_ZOOM = 9;
const MAIN_PIN_WIDTH = 52;
const PIN_WIDTH = 40;
const map = window.L.map('map-canvas');

const initMap = (similarAdverts) => {
  map.on('load', () => {
    activateAdForm();
    address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
  })
    .setView({
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    }, MAIN_ZOOM);

  window.L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  similarAdverts.forEach(({author, location, offer}) => {
    const advertPinIcon = window.L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [PIN_WIDTH, PIN_WIDTH],
      iconAnchor: [PIN_WIDTH/2, PIN_WIDTH],
    });

    const lat = location.lat;
    const lng = location.lng;

    const advertMarker = window.L.marker({
      lat,
      lng,
    },
    {
      icon: advertPinIcon,
    },
    );

    advertMarker
      .addTo(map)
      .bindPopup(createAdvertElement({author, offer}),
        {
          keepInView: true,
        });
  });
};

const initMainMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_WIDTH],
    iconAnchor: [MAIN_PIN_WIDTH/2, MAIN_PIN_WIDTH],
  });

  const mainPinMarker = window.L.marker(
    {
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    const lat = coords.lat.toFixed(LOCATION_FLOAT);
    const lng = coords.lng.toFixed(LOCATION_FLOAT);
    address.value = `${lat}, ${lng}`;
  });
  return mainPinMarker;
};

const setAddress = () => {
  address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
};

const mainMarker = initMainMarker();
mainMarker.addTo(map);

const resetMainMarker = () => {
  mainMarker.setLatLng(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE));
  map.setView(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE), MAIN_ZOOM);
};

export { initMap, setAddress, mainMarker, resetMainMarker }
