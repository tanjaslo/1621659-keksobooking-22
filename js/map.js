/* global L:readonly */
import { address, activateAdForm } from './form.js';
import { MAIN_LATITUDE, MAIN_LONGITUDE, LOCATION_FLOAT } from './data.js';
import { createAdvertElement } from './popup.js';
import { similarAdverts } from './main.js';

const initMap = () => {
  const map = L.map('map-canvas').on('load', () => {
    activateAdForm();
    address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
  })
    .setView({
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
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
  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const lat = evt.target.getLatLng().lat;
    const lng = evt.target.getLatLng().lng;
    address.value = `${lat.toFixed(LOCATION_FLOAT)}, ${lng.toFixed(LOCATION_FLOAT)}`;
  });

  similarAdverts.forEach(({author, location, offer}) => {
    const advertPinIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const lat = location.x;
    const lng = location.y;

    const advertMarker = L.marker({
      lat,
      lng,
    },
    {
      advertPinIcon,
    },
    );

    advertMarker.addTo(map).bindPopup(createAdvertElement({author, offer}));
  });
};

export { initMap }
