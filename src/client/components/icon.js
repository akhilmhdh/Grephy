import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: 'leaflet/src/images/marker-icon.png',
    iconRetinaUrl:null,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };