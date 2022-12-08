function Info({ type, city, place, date }) {
  const eventDate = new Date(date);

  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md p-5 mb-3 w-52" id="info">
      <div className="flex flex-col mb-2">
        <h2 className="text-lg font-semibold mb-1">Type de sortie</h2>
        <span className="italic text-sm">{type}</span>
      </div>

      <div className="flex flex-col my-2">
        <h2 className="text-lg font-semibold mb-1">Date</h2>
        <span className="italic text-sm">
          {eventDate.toLocaleString("fr-FR", { hour: "2-digit" })}{" "}
          {eventDate.toLocaleString("fr-FR", { minute: "2-digit" }).padStart(2, 0)}
        </span>
        <span className="italic text-sm">
          {eventDate.toLocaleString("fr-FR", { weekday: "long" })}{" "}
          {eventDate.toLocaleString("fr-FR", { day: "numeric" })}{" "}
          {eventDate.toLocaleString("fr-FR", { month: "short" })}{" "}
        </span>
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
