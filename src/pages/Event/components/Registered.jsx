import { fetchUser } from "../../../api/users";
import { useState, useRef, useEffect } from "react";
import EventProfile from "./EventProfile/EventProfile";

function Registered({ registered }) {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    async function getUser() {
      const registeredData = Promise.all(registered.map(async (id) => await fetchUser(id)));
      setUsers(await registeredData);
    }
    getUser();
  }, [registered]);

  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md md:px-5 px-3 overflow-hidden" id="info">
      <div
        onClick={() => setActive(!active)}
        className="flex flex-row justify-between items-center my-2 cursor-pointer"
      >
        <h2 className="text-lg font-semibold mb-1">Inscrits - {registered.length}</h2>
        {active ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
      </div>
      <ul
        ref={contentRef}
        style={active ? { maxHeight: contentRef.current.scrollHeight + "px" } : { maxHeight: "0px" }}
      >
        {users.map((data) => (
          <li className="mb-1" key={data._id}>
            <EventProfile user={data} textColor="text-gray-3" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registered;
