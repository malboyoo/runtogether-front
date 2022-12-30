import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import NameForm from "./components/NameForm";
import CityForm from "./components/CityForm";
import ClubForm from "./components/ClubForm";
import PasswordForm from "./components/PasswordForm";
import PictureForm from "./components/PictureForm";

function UserSettings() {
  const [message, setMessage] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [toggleSettings, setToggleSettings] = useState({
    photo: false,
    name: false,
    city: false,
    club: false,
    password: false,
  });
  return (
    <main className="flex flex-auto align-center justify-center bg-gray-3">
      <div className="card sm:p-8 p-4 md:my-16 my-10 mx-4 max-w-2xl flex flex-col flex-auto text-gray-4 shadow-lg">
        <h2 className="text-2xl mb-4 font-semibold">Mon profil</h2>

        {/* EMAIL */}
        <div className="my-4 grid grid-cols-3  justify-between items-center">
          <span className="font-semibold ml-1">E-mail</span>
          <span className="m-auto">{user.email} </span>
          <i className="fa-solid fa-ban text-gray-2 cursor-pointer text-end mr-2"></i>
        </div>

        <hr className="border border-gray-1" />

        {/* PROFILE PICTURE */}
        {toggleSettings.photo ? (
          <PictureForm setToggleSettings={setToggleSettings} user={user} setUser={setUser} />
        ) : (
          <div className="my-4 grid grid-cols-3 justify-between items-center ">
            <span className="font-semibold ml-1">Photo</span>
            <div className="m-auto rounded-md w-24 h-24 overflow-hidden">
              <img src={user.imageUrl} alt={user.firstName} className="rounded-md " />
            </div>

            <i
              className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"
              onClick={() => setToggleSettings({ ...toggleSettings, photo: true })}
            ></i>
          </div>
        )}

        <hr className="border border-gray-1" />

        {/* NAME */}
        {toggleSettings.name ? (
          <NameForm user={user} setToggleSettings={setToggleSettings} setUser={setUser} />
        ) : (
          <div className="my-4 grid grid-cols-3  justify-between items-center">
            <span className="font-semibold ml-1">Nom</span>
            <span className="m-auto">
              {user.firstName} {user.lastName}{" "}
            </span>
            <i
              className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"
              onClick={() => setToggleSettings({ ...toggleSettings, name: true })}
            ></i>
          </div>
        )}

        <hr className="border border-gray-1" />

        {/* CITY */}
        {toggleSettings.city ? (
          <CityForm user={user} setToggleSettings={setToggleSettings} setUser={setUser} />
        ) : (
          <div className="my-4 grid grid-cols-3 justify-between items-center">
            <span className="font-semibold ml-1">Ville</span>
            <span className="m-auto">{user.city}</span>
            <i
              className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"
              onClick={() => setToggleSettings({ ...toggleSettings, city: true })}
            ></i>
          </div>
        )}

        <hr className="border border-gray-1" />

        {/* CLUB */}
        {toggleSettings.club ? (
          <ClubForm user={user} setToggleSettings={setToggleSettings} setUser={setUser} />
        ) : (
          <div className="my-4 grid grid-cols-3 justify-between items-center">
            <span className="font-semibold ml-1">Club</span>
            <span className="m-auto">{user.club}</span>
            <i
              className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"
              onClick={() => setToggleSettings({ ...toggleSettings, club: true })}
            ></i>
          </div>
        )}

        <hr className="border border-gray-1" />

        {/* PASSWORD */}
        {toggleSettings.password ? (
          <PasswordForm user={user} setToggleSettings={setToggleSettings} setUser={setUser} setMessage={setMessage} />
        ) : (
          <div className="my-4 grid grid-cols-3 justify-between items-center">
            <span className="font-semibold ml-1">Mot de passe</span>
            <span className="m-auto">***********</span>
            <i
              className="fa-solid fa-pen text-gray-2 cursor-pointer text-end mr-2"
              onClick={() => setToggleSettings({ ...toggleSettings, password: true })}
            ></i>
          </div>
        )}
        {message && <p className="success-msg">{message}</p>}
        <hr className="border border-gray-1" />

        <div className="mt-5 text-sm underline text-red-1">
          <NavLink to="/delete"> Supprimer mon compte</NavLink>
        </div>
      </div>
    </main>
  );
}

export default UserSettings;
