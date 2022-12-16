import { dateToString } from "../../../utils/dateConverter";

function Info({ type, city, place, date }) {
  const eventDate = new Date(date);
  const countdown = dateToString(date);
  return (
    <div
      className="flex flex-col border-2 border-gray-1 rounded-md md:p-5 p-3 mb-3 md:w-52 w-full mt-3 md:mt-0"
      id="info"
    >
      <div className="flex md:flex-col md:mb-2 items-center">
        <h2 className="md:text-lg text-md font-semibold md:mb-1 mr-2">Type de sortie:</h2>
        <span className="italic text-sm">{type}</span>
      </div>

      <div className="flex flex-row md:flex-col md:my-2 items-center">
        <h2 className="md:text-lg text-md font-semibold md:mb-1 mr-2">Date:</h2>
        <span className="italic text-sm">
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

      <div className="flex md:flex-col flex-row items-center md:my-2">
        <h2 className="md:text-lg text-md font-semibold md:mb-1 mr-2">Lieu de RDV:</h2>
        <span className="italic text-sm mr-1">{place}, </span>
        <span className="italic text-sm ">{city}</span>
      </div>
    </div>
  );
}

export default Info;
