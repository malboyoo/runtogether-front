import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import EventCard from "./components/EventCard";

function EventList() {
  const { user } = useContext(AuthContext);
  const eventData = useLoaderData().sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  const [allEvent, setAllEvent] = useState(eventData.filter((e) => Date.parse(e.date) >= Date.now()));
  const [personalEvent, setPersonnalEvent] = useState(eventData.filter((e) => e.registered.includes(user._id)));
  const [myEvent, setMyEvent] = useState(false);

  return (
    <section className="flex flex-col flex-auto items-center justify-center bg-gray-3">
      <nav className="flex flex-col items-center justify-center">
        <ul className="flex flex-row mt-10 justify-center">
          <li
            className={`p-3 md:text-lg bg-dark-1 text-logo-1 shadow-2xl mx-2 font-medium rounded-md hover:brightness-150 transition-all cursor-pointer md:w-48 w-40 text-center ${
              !myEvent && "border-2 border-logo-1"
            }`}
            onClick={() => {
              setMyEvent(false);
            }}
          >
            {myEvent ? (
              <span>
                Sortir <i className="fa-solid fa-person-running"></i>
              </span>
            ) : (
              <span>
                » Sortir <i className="fa-solid fa-person-running"></i> «
              </span>
            )}
          </li>
          <li
            className={`p-3 md:text-lg bg-dark-1 text-logo-2 shadow-2xl mx-2 font-medium rounded-md md:w-48 w-40 text-center hover:brightness-150 transition-all cursor-pointer ${
              myEvent && "border-2 border-logo-2"
            }`}
            onClick={() => {
              setMyEvent(true);
            }}
          >
            {myEvent ? "» Mes sorties «" : "Mes sorties"}
          </li>
        </ul>
        <div className="mt-5">
          <label htmlFor="type" className="md:text-base text-sm mr-2">
            Filtre
          </label>
          <select
            name="type"
            className="md:text-base text-sm border-2 border-gray-2 rounded-md p-1 text-gray-3"
            onChange={(v) => {
              if (v.target.value !== "None") {
                setAllEvent(
                  eventData.filter((e) => Date.parse(e.date) >= Date.now()).filter((e) => e.type === v.target.value)
                );
                setPersonnalEvent(
                  eventData.filter((e) => e.registered.includes(user._id)).filter((e) => e.type === v.target.value)
                );
              } else {
                setAllEvent(eventData.filter((e) => Date.parse(e.date) >= Date.now()));
                setPersonnalEvent(eventData.filter((e) => e.registered.includes(user._id)));
              }
            }}
          >
            <option value="None">Aucun</option>
            <option value="Running">Running</option>
            <option value="Trail">Trail</option>
            <option value="Marche">Marche</option>
            <option value="Vélo">Vélo</option>
            <option value="Course">Course</option>
          </select>
        </div>
      </nav>
      <div className="md:my-5 my-5 max-w-4xl flex flex-col flex-auto w-full">
        <ul className="w-full">
          {myEvent
            ? personalEvent.map((event) => <EventCard {...event} key={event._id} />)
            : allEvent.map((event) => <EventCard {...event} key={event._id} />)}
        </ul>
      </div>
    </section>
  );
}

export default EventList;
