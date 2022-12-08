import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ bounds, raw, label }) {
  return (
    <MapContainer center={bounds[0]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={bounds[0]}>
        <Popup>{label.split(",")[0]}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
