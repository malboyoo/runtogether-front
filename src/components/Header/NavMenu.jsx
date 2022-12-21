import { NavLink } from "react-router-dom";
//import styles from "./NavMenu.module.scss";

function NavMenu({ setMenuOpen, logout }) {
  return (
    <div className={`absolute top-full right-0  bg-gray-4 p-3 z-50 mt-6 rounded-md`}>
      <ul className="flex flex-col items-strecht">
        <NavLink to="settings" onClick={() => setMenuOpen(false)}>
          <li className="p-2 mb-2 bg-dark-1 rounded-md  text-right flex justify-between items-center">
            Mon profil<i className="fa-solid fa-gear ml-5"></i>
          </li>
        </NavLink>
        <li
          onClick={() => logout()}
          className="p-2 bg-dark-1 rounded-md text-right flex justify-between items-center cursor-pointer hover:underline"
        >
          Se déconnecter <i className="fa-solid fa-door-open ml-5 "></i>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
