import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Info from "./components/Info";
import Registered from "./components/Registered";
import Description from "./components/Description";
import Commentary from "./components/Commentary/Commentary";
import EventProfile from "./components/EventProfile/EventProfile";
import Map from "./components/Map/Map";
import EventButtons from "./components/EventButtons";
import runningImg from "../../assets/images/icons/running.png";
import trailingImg from "../../assets/images/icons/trailing.png";
import walkingImg from "../../assets/images/icons/walking.png";
import cyclingImg from "../../assets/images/icons/cycling.png";
import { useFetchUser } from "../../hooks/useFetchUser";
import { deleteEvent, registerToEvent, unregisterToEvent } from "../../api/event";

function Event() {
  const navigate = useNavigate();
  const { id } = useParams();
  const event = useLoaderData();
  const [author] = useFetchUser(event.author);
  const [registered, setRegistered] = useState(event.registered);
  const [error, setError] = useState("");

  const handleClickSign = async () => {
    try {
      const { registered } = await registerToEvent(id);
      setRegistered(registered);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClickUnsign = async () => {
    try {
      const { registered } = await unregisterToEvent(id);
      setRegistered(registered);
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
    <>
      <section className="flex flex-auto align-center justify-center bg-gray-3">
        <div className="card p-8 my-20 max-w-4xl flex flex-col flex-auto text-gray-3 shadow-xl">
          <div className="h-96 rounded-md overflow-hidden border-gray-2 border-2 shadow-lg" id="map">
            <Map {...event.location} />
          </div>

          <div className="flex flex-row justify-between items-center my-3 px-2 ">
            <div className="flex flex-row items-center">
              <div className="flex flex-col my-2 h-8 w-8 mr-4">
                <img
                  src={
                    event.type === "Running"
                      ? runningImg
                      : event.type === "Trail"
                      ? trailingImg
                      : event.type === "Marche"
                      ? walkingImg
                      : cyclingImg
                  }
                  alt=""
                />
              </div>
              <h1 className="text-xl font-medium">{event.name}</h1>
            </div>
            {author.lastName && <EventProfile user={author} textColor="text-white" />}
          </div>

          <hr className="border border-gray-1 mb-3" />

          <div className="flex flex-row text-base mt-5">
            <div className="flex flex-col">
              <Info
                type={event.type}
                city={event.location.city}
                place={event.location.label.split(",")[0]}
                date={event.date}
              />
              <Registered registered={registered} />
            </div>

            <div className="flex flex-col w-full ml-3">
              <Description description={event.description} />
              <Commentary messages={event.messages} />
            </div>
          </div>

          <hr className="border border-gray-1 my-5" />

          <EventButtons
            registered={registered}
            author={event.author}
            handleClickSign={handleClickSign}
            handleClickUnsign={handleClickUnsign}
            error={error}
            handleDeleteEvent={handleDeleteEvent}
            id={id}
          />
        </div>
      </section>
    </>
  );
}

export default Event;
