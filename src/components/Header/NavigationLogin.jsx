import { useState } from "react";
import NavMenu from "./NavMenu";
import Profile from "../Profile/Profile";
import { useNavigate } from "react-router-dom";

function NavigationLogin({ user, logout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <ul className="flex items-center justify-start h-12 text-sm sm:text-base">
        <li className=" h-full" onClick={() => navigate("/create-event")}>
          <div className="flex flex-row items-center bg-gray-4 hover:bg-dark-2 transition-all rounded-md p-1 cursor-pointer min-h-full">
            <span className="p-1 font-medium">
              Créer <i className="fa-regular fa-calendar-plus  text-logo-1"></i>
            </span>
          </div>
        </li>
        <li className="sm:ml-5 ml-2 h-full" onClick={() => navigate("/event")}>
          <div className="flex flex-row items-center bg-gray-4  hover:bg-dark-2 transition-all rounded-md p-1 cursor-pointer min-h-full">
            <span className="p-1 font-medium">
              Participer <i className="fa-solid fa-location-dot text-logo-1"></i>
            </span>
          </div>
        </li>
        <li className="sm:ml-5 ml-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <Profile user={user} />
        </li>
      </ul>
      {menuOpen && (
        <>
          <div className="calc fixed top-0 left-0 w-full h-screen z-10" onClick={() => setMenuOpen(false)}></div>
          <NavMenu setMenuOpen={setMenuOpen} logout={logout} />
        </>
      )}
    </nav>
  );
}

export default NavigationLogin;
