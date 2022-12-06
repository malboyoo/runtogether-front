import EventProfile from "./EventProfile/EventProfile";
import { fetchUser } from "../../../api/users";
import { useEffect } from "react";
import { useState } from "react";

function Registered({ registered }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      const registeredData = Promise.all(registered.map(async (id) => await fetchUser(id)));
      setUsers(await registeredData);
    }
    getUser();
  }, [registered]);

  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md p-5" id="info">
      <div className="flex flex-col mb-2">
        <h2 className="text-lg font-semibold mb-1">Inscrits - {registered.length}</h2>
      </div>
      <ul>
        {users.map((data) => (
          <li className="mb-1" key={data._id}>
            <EventProfile user={data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registered;
