import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import EditName from "./EditName";
//import styles from "./UserSettings.module.scss";

function UserSettings() {
  const { user } = useContext(AuthContext);
  const [toggleName, setToggleName] = useState(false);
  return (
    <section className="flex flex-auto align-center justify-center">
      <div className="card p-8 my-20 max-w-xl flex flex-col flex-auto text-gray-4">
        <h2 className="text-2xl mb-4 font-semibold"> Mon profil</h2>

        <hr className="border border-gray-1" />

        <div className="my-4 flex flex-row justify-between items-center ">
          <span className="font-semibold ml-1">Photo</span>
          <div className="m-auto rounded-md w-24 h-24">
            <img src={user.imageUrl} alt={user.firstName} />
          </div>

          <i className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"></i>
        </div>

        <hr className="border border-gray-1" />

        {toggleName ? (
          <EditName user={user} setToggleName={setToggleName} />
        ) : (
          <div className="my-4 flex flex-row  justify-between items-center">
            <span className="font-semibold ml-1">Nom</span>
            <span className="m-auto">
              {user.firstName} {user.lastName}{" "}
            </span>
            <i
              className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"
              onClick={() => setToggleName(true)}
            ></i>
          </div>
        )}

        <hr className="border border-gray-1" />

        <div className="my-4 flex flex-row justify-between items-center">
          <span className="font-semibold ml-1">Ville</span>
          <span className="m-auto">{user.city}</span>
          <i className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"></i>
        </div>

        <hr className="border border-gray-1" />

        <div className="my-4 flex flex-row justify-between items-center">
          <span className="font-semibold ml-1">Club</span>
          <span className="m-auto">{user.club}</span>
          <i className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"></i>
        </div>
      </div>
    </section>
  );
}

export default UserSettings;
