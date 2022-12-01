import styles from "./NavigationLogin.module.scss";
import { useState } from "react";
import NavMenu from "./NavMenu";

function NavigationLogin({ user, logout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative">
      <ul className="flex items-center h-12">
        <li className="ml-5 h-full">
          <div className="flex flex-row items-center bg-gray-4 rounded-md p-1 cursor-pointer min-h-full">
            <span className="p-1 font-medium">
              Mes sorties <i className="fa-solid fa-location-dot text-logo-1"></i>
            </span>
          </div>
        </li>
        <li className="ml-5" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="flex flex-row items-center bg-gray-4 rounded-md p-1 cursor-pointer">
            <div className="mx-2 font-medium">{user.firstName}</div>
            <div className={styles.profilePicture} style={{ backgroundImage: `url(${user.imageUrl})` }}></div>
          </div>
        </li>
      </ul>
      {menuOpen ? <NavMenu setMenuOpen={setMenuOpen} logout={logout} /> : null}
    </nav>
  );
}

export default NavigationLogin;