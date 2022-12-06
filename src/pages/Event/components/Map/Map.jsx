import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ position, place }) {
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{place}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
