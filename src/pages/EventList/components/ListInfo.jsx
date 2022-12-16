function ListInfo({ type, city, place, date, countdown }) {
  const eventDate = new Date(date);

  return (
    <div className="flex flex-col justify-between rounded-md p-3 pt-0 md:pt-3 mx-3 w-fill" id="ListInfo">
      <div className="mb-1">
        <span className="italic text-sm">
          <b>Type: </b> {type}
        </span>
      </div>

      <div className="flex flex-col my-1">
        <span className="italic text-sm">
          <b>Date: </b>
          {countdown === "Aujourd'hui" || countdown === "Demain"
            ? `${countdown} à
          ${eventDate.toLocaleString("fr-FR", { hour: "2-digit" })} 
          ${eventDate.toLocaleString("fr-FR", { minute: "2-digit" }).padStart(2, 0)}`
            : `${eventDate.toLocaleString("fr-FR", { weekday: "long" })}
          ${eventDate.toLocaleString("fr-FR", { day: "numeric" })}
          ${eventDate.toLocaleString("fr-FR", { month: "short" })} à 
          ${eventDate.toLocaleString("fr-FR", { hour: "2-digit" })}
          ${eventDate.toLocaleString("fr-FR", { minute: "2-digit" }).padStart(2, 0)}`}
        </span>
      </div>

      <div className="flex flex-row mt-1">
        <span className="italic text-sm">
          <b>Lieu: </b>
          {place}, {city}
        </span>
      </div>
    </div>
  );
}

export default ListInfo;
