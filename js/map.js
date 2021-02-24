/* global L:readonly */
import { address, activateAdForm } from './form.js';
import { createAdvertElement } from './popup.js';

const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;
const LOCATION_FLOAT = 5;
const MAIN_ZOOM = 12;
const MAIN_PIN_WIDTH = 52;
const PIN_WIDTH = 40;

const initMap = (similarAdverts) => {
  const map = L.map('map-canvas').on('load', () => {
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
  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const lat = evt.target.getLatLng().lat;
    const lng = evt.target.getLatLng().lng;
    address.value = `${lat.toFixed(LOCATION_FLOAT)}, ${lng.toFixed(LOCATION_FLOAT)}`;
  });

  similarAdverts.forEach(({author, location, offer}) => {
    const advertPinIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [PIN_WIDTH, PIN_WIDTH],
      iconAnchor: [PIN_WIDTH/2, PIN_WIDTH],
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

    advertMarker
      .addTo(map)
      .bindPopup(createAdvertElement({author, offer}),
        {
          keepInView: true,
        });
  });
}

export { initMap }
