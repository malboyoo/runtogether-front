import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { deleteEvent, registerToEvent, unregisterToEvent } from "../../api/event";
import { AuthContext } from "../../context/AuthContext";
import Map from "./components/Map/Map";
import Info from "./components/Info";
import Registered from "./components/Registered";
import Description from "./components/Description";
import Commentary from "./components/Commentary/Commentary";
import EventProfile from "./components/EventProfile/EventProfile";
import EventButtons from "./components/EventButtons";
import runningImg from "../../assets/images/icons/running.png";
import trailingImg from "../../assets/images/icons/trailing.png";
import walkingImg from "../../assets/images/icons/walking.png";
import cyclingImg from "../../assets/images/icons/cycling.png";
import raceImg from "../../assets/images/icons/race.png";

function Event() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const event = useLoaderData();
  const [author] = useFetchUser(event.author);
  const [registered, setRegistered] = useState(event.registered);
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(registered.includes(user._id));
  const expired = Date.parse(event.date) < Date.now();

  const handleClickSign = async () => {
    try {
      const { registered } = await registerToEvent(id);
      setRegistered(registered);
      setIsRegistered(!isRegistered);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClickUnsign = async () => {
    try {
      const { registered } = await unregisterToEvent(id);
      setRegistered(registered);
      setIsRegistered(!isRegistered);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="flex flex-col flex-auto items-center justify-center bg-gray-3 mx-4">
      <button className="btn btn-rt1 self-start w-16 px-4 shadow-2xl mt-5" onClick={() => navigate("/event")}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <section className="card md:p-8 p-4 mt-5  mb-10 max-w-4xl w-full flex flex-col flex-auto text-gray-3 shadow-xl">
        <div className="md:h-96 h-64 rounded-md overflow-hidden border-gray-2 border-2 shadow-lg" id="map">
          <Map {...event.location} />
        </div>

        <div className="flex flex-row justify-between items-center my-3 md:px-2 ">
          <div className="flex flex-row items-center flex-auto">
            <div className="flex flex-col  my-2 md:h-8 md:w-8 h-6 w-6 mr-2 md:mr-4">
              <img
                src={
                  event.type === "Running"
                    ? runningImg
                    : event.type === "Trail"
                    ? trailingImg
                    : event.type === "Marche"
                    ? walkingImg
                    : event.type === "Vélo"
                    ? cyclingImg
                    : raceImg
                }
                alt="discipline"
              />
            </div>
            <h1 className="md:text-xl text-base font-medium">
              {event.name}
              <span className="hidden md:inline">{expired ? " - (terminé)" : " - (à venir)"}</span>
            </h1>
          </div>
          {author.lastName && <EventProfile user={author} textColor="text-gray-3" />}
        </div>

        <hr className="border border-gray-1 mb-3" />

        <div className="flex flex-col-reverse md:flex-row text-base md:mt-5">
          <div className="flex flex-col">
            <Info
              type={event.type}
              city={event.location.city}
              place={event.location.label.split(",")[0]}
              date={event.date}
            />
            <Registered registered={registered} />
          </div>

          <div className="flex flex-col w-full md:ml-3">
            <Description description={event.description} />
            <Commentary eventMessages={event.messages} isRegistered={isRegistered} expired={expired} />
          </div>
        </div>

        <hr className="border border-gray-1 md:my-5 my-3" />

        <EventButtons
          expired={expired}
          registered={registered}
          author={event.author}
          handleClickSign={handleClickSign}
          handleClickUnsign={handleClickUnsign}
          error={error}
          handleDeleteEvent={handleDeleteEvent}
          id={id}
        />
      </section>
    </main>
  );
}

export default Event;
