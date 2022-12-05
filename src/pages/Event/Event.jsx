import { useParams } from "react-router-dom";
import { useFetchSingleEvent } from "../../hooks/useFetchSingleEvent";
import Info from "./components/Info";
import Registered from "./components/Registered";
import Description from "./components/Description";
import Commentary from "./components/Commentary";
import Profile from "../../components/Profile/Profile";
import Map from "./components/Map/Map";
import runningImg from "../../assets/images/icons/running.png";
import { useFetchUser } from "../../hooks/useFetchUser";

function Event() {
  const { id } = useParams();
  const [event] = useFetchSingleEvent(id);
  const [author] = useFetchUser(event.author);
  console.log(author);

  // coder la partie back de author

  return (
    <>
      <section className="flex flex-auto align-center justify-center bg-gray-3">
        <div className="card p-8 my-20 max-w-4xl flex flex-col flex-auto text-gray-3 shadow-xl">
          <div className="h-96 rounded-md overflow-hidden border-gray-2 border-2 shadow-lg" id="map">
            <Map position={event.position} place={event.place} />
          </div>

          <div className="flex flex-row justify-between items-center my-3 px-2 ">
            <div className="flex flex-row items-center">
              <div className="flex flex-col my-2 h-8 w-8 mr-4">
                <img src={runningImg} alt="" />
              </div>
              <h1 className="text-xl font-medium">{event.name}</h1>
            </div>
            <Profile user={author} />
          </div>

          <hr className="border border-gray-1 mb-3" />

          <div className="flex flex-row text-base mt-5">
            <div className="flex flex-col">
              <Info type={event.type} city={event.city} place={event.place} date={event.date} />
              <Registered registered={event.registered} />
            </div>

            <div className="flex flex-col w-full ml-3">
              <Description description={event.description} />
              <Commentary />
            </div>
          </div>

          <hr className="border border-gray-1 my-5" />

          <button className="btn btn-primary mx-10">S'inscrire</button>
        </div>
      </section>
    </>
  );
}

export default Event;
