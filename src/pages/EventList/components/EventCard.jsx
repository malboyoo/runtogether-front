import runningImg from "../../../assets/images/icons/running.png";
import trailingImg from "../../../assets/images/icons/trailing.png";
import walkingImg from "../../../assets/images/icons/walking.png";
import cyclingImg from "../../../assets/images/icons/cycling.png";
import Map from "./Map/Map";
import ListInfo from "./ListInfo";
import { useNavigate } from "react-router-dom";
import { dateToString } from "../../../utils/dateConverter";

function EventCard({ name, location, type, date, city, registered, _id }) {
  const navigate = useNavigate();
  const countdown = dateToString(date);

  return (
    <li>
      <article className="card md:p-4 p-2 mx-4  shadow-lg text-gray-3 mb-5 flex md:flex-row flex-col-reverse">
        <div className="info flex flex-auto flex-col justify-between">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between mr-3">
            <div className="flex flex-row items-center ">
              <div className="my-2 md:h-8 md:w-8 h-6 w-6 md:mr-4 mr-2">
                <img
                  src={
                    type === "Running"
                      ? runningImg
                      : type === "Trail"
                      ? trailingImg
                      : type === "Marche"
                      ? walkingImg
                      : cyclingImg
                  }
                  alt=""
                />
              </div>
              <h2 className="md:text-lg text-base font-medium">{name} </h2>
              <span className="text-sm ml-1">
                ( {registered.length} {registered.length > 1 ? " inscrits" : " inscrit"} )
              </span>
            </div>
            <div className="hidden md:block">
              <span className="italic text-sm mr-2 ml-3 md:ml-0 pl-3 md:pl-0">{countdown}</span>
            </div>
          </div>
          <ListInfo
            type={type}
            city={location.city}
            place={location.label.split(",")[0]}
            date={date}
            countdown={countdown}
          />
          <button
            className="btn btn-rt2 justify-self-center  text-white w-36 h-9 self-center md:self-start md:ml-6"
            onClick={() => navigate(`/event/${_id}`)}
          >
            Voir la sortie »
          </button>
        </div>
        <div className="map h-48 md:w-56 w-full overflow-hidden rounded-md border-2 border-gray-1">
          <Map {...location} />
        </div>
      </article>
    </li>
  );
}

export default EventCard;
