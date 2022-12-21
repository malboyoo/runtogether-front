import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";

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
    map.on("click", function (e) {
      console.log(e);
    });
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

function Map({ setMapInfo, bounds, label }) {
  return (
    <MapContainer center={bounds[0]} zoom={15} scrollWheelZoom={false}>
      <SearchField setMapInfo={setMapInfo} />
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
