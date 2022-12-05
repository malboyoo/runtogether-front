function Info({ type, city, place, date }) {
  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md p-5 mb-3 w-52" id="info">
      <div className="flex flex-col mb-2">
        <h2 className="text-lg font-semibold mb-1">Type de sortie</h2>
        <span className="italic text-sm">{type}</span>
      </div>

      <div className="flex flex-col my-2">
        <h2 className="text-lg font-semibold mb-1">Date</h2>
        <span className="italic text-sm">18h</span>
        <span className="italic text-sm">Mercredi 7 décembre</span>
      </div>

      <div className="flex flex-col my-2">
        <h2 className="text-lg font-semibold mb-1">Lieu de RDV</h2>
        <span className="italic text-sm">{place}</span>
        <span className="italic text-sm">{city}</span>
      </div>
    </div>
  );
}

export default Info;
