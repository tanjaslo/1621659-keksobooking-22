/* global L:readonly */
import { address, activateAdForm } from './form.js';
import { createAdvertElement } from './popup.js';

const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;
const LOCATION_FLOAT = 5;
const MAIN_ZOOM = 9;
const MAIN_PIN_WIDTH = 52;
const PIN_WIDTH = 40;
const map = L.map('map-canvas');

const initMap = (similarAdverts) => {
  map.on('load', () => {
    activateAdForm();
    address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
  })
    .setView({
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    }, MAIN_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  similarAdverts.forEach(({author, location, offer}) => {
    const advertPinIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [PIN_WIDTH, PIN_WIDTH],
      iconAnchor: [PIN_WIDTH/2, PIN_WIDTH],
    });

    const lat = location.lat;
    const lng = location.lng;

    const advertMarker = L.marker({
      lat,
      lng,
    },
    {
      advertPinIcon,
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

  const mainPinMarker = L.marker(
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
    const lat = evt.target.getLatLng().lat;
    const lng = evt.target.getLatLng().lng;
    address.value = `${lat.toFixed(LOCATION_FLOAT)}, ${lng.toFixed(LOCATION_FLOAT)}`;
  });
  return mainPinMarker;
};

const mainMarker = initMainMarker();
mainMarker.addTo(map);

const resetMainMarker = () => {
  mainMarker.setLatLng(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE));
  map.setView(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE), MAIN_ZOOM);
};

const setAddress = () => {
  address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
};

export { initMap, setAddress, mainMarker, resetMainMarker }
