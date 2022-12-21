import { dateToString } from "../../../utils/dateConverter";
import { useState, useRef } from "react";

function Info({ type, city, place, date }) {
  const eventDate = new Date(date);
  const countdown = dateToString(date);
  const [active, setActive] = useState(false);
  const contentRef = useRef();

  return (
    <div
      className="flex flex-col border-2 border-gray-1 rounded-md md:px-5 px-3 my-3 md:w-52 w-full  md:mt-0 overflow-hidden"
      id="info"
    >
      <div
        onClick={() => setActive(!active)}
        className="flex flex-row justify-between items-center my-2 cursor-pointer"
      >
        <h2 className="text-lg font-semibold mb-1">Informations</h2>
        {active ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
      </div>

      <div
        ref={contentRef}
        style={active ? { maxHeight: contentRef.current.scrollHeight + "px" } : { maxHeight: "0px" }}
      >
        <div className="flex md:flex-col md:mb-2 items-start">
          <h3 className="text-md font-semibold md:mb-1 mr-2">Discipline:</h3>
          <span className="italic text-sm leading-6">{type}</span>
        </div>
        <div className="flex flex-row md:flex-col md:my-2 items-start">
          <h3 className="text-md font-semibold md:mb-1 mr-2">Date:</h3>
          <span className="italic text-sm leading-6">
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

        <div className="flex flex-col md:items-start md:my-2">
          <h3 className="text-md font-semibold md:mb-1 mr-2">Lieu de RDV:</h3>
          <span className="italic text-sm mr-1">{place}, </span>
          <span className="italic text-sm ">{city}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
