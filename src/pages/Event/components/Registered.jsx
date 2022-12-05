import { useContext } from "react";
import EventProfile from "./EventProfile/EventProfile";
import { AuthContext } from "../../../context/AuthContext";

function Registered() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md p-5" id="info">
      <div className="flex flex-col mb-2">
        <h2 className="text-lg font-semibold mb-1">Inscrits - 1</h2>
      </div>
      <EventProfile user={user} />
      <EventProfile user={user} />
      <EventProfile user={user} />
      <EventProfile user={user} />
    </div>
  );
}

export default Registered;
