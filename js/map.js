import { address, activateAdForm } from './form.js';
import { createAdvertElement } from './popup.js';
import { setFilteredMarkers } from './filter.js';

const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;
const LOCATION_FLOAT = 5;
const MAIN_ZOOM = 9;
const MAIN_PIN_WIDTH = 52;
const PIN_WIDTH = 40;
const map = window.L.map('map-canvas');
const tileLayer = window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

const initMap = (adverts) => {
  map.on('load', () => {
    tileLayer.addTo(map);
    mainMarker.addTo(map);
    activateAdForm();
    setAddress();
    setAllMarkers(adverts);
    setFilteredMarkers(adverts);
  })
    .setView({
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    }, MAIN_ZOOM);
};

const markers = [];

const setAllMarkers = (adverts) => {
  adverts.forEach((advert) => {
    const advertPinIcon = window.L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [PIN_WIDTH, PIN_WIDTH],
      iconAnchor: [PIN_WIDTH/2, PIN_WIDTH],
    });
    const marker = window.L.marker({
      lat: advert.location.lat,
      lng: advert.location.lng,
    },
    {
      icon: advertPinIcon,
    },
    );
    marker
      .addTo(map)
      .bindPopup(createAdvertElement(advert),
        {
          keepInView: true,
        })
    markers.push(marker);
  })
};

const initMainMarker = () => {
  const mainPinIcon = window.L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_WIDTH],
    iconAnchor: [MAIN_PIN_WIDTH/2, MAIN_PIN_WIDTH],
  });

  const mainMarker = window.L.marker(
    {
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    const lat = coords.lat.toFixed(LOCATION_FLOAT);
    const lng = coords.lng.toFixed(LOCATION_FLOAT);
    address.value = `${lat}, ${lng}`;
  });
  return mainMarker;
};

const mainMarker = initMainMarker();

const resetMainMarker = () => {
  mainMarker.setLatLng(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE));
  map.setView(new window.L.LatLng(MAIN_LATITUDE, MAIN_LONGITUDE), MAIN_ZOOM);
};

const setAddress = () => {
  address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
};

export { initMap, setAddress, resetMainMarker, markers, setAllMarkers }
