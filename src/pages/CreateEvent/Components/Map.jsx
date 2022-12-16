import { MapContainer, TileLayer } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const SearchField = ({ setMapInfo }) => {
  const provider = new OpenStreetMapProvider({
    params: {
      email: "thibaut.lefevre.dev@gmail.com",
      "accept-language": "fr", // render results in Dutch
      countrycodes: "fr", // limit search results to the france
      addressdetails: 1, // include additional address detail parts
    },
  });

  const searchControl = new GeoSearchControl({
    provider: provider,
    autoComplete: true, // optional: true|false  - default true
    autoCompleteDelay: 500, // optional: number      - default 250
    searchLabel: "Entrez l'adresse",
  });

  const handleResult = (result) => {
    setMapInfo(result.location);
  };

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    map.on("geosearch/showlocation", handleResult);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

function Map({ setMapInfo }) {
  return (
    <MapContainer center={[44.9954151, -0.4440957]} zoom={10} scrollWheelZoom={false}>
      <SearchField setMapInfo={setMapInfo} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
