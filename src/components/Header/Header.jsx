import { NavLink } from "react-router-dom";
import NavigationNotLogin from "./NavigationNotLogin";
import NavigationLogin from "./NavigationLogin";
//import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="flex sm:flex-row flex-col justify-between items-center sm:px-4 px-2 py-4 bg-dark-1 md:h-20 shadow-lg">
      <div className="sm:mb-0 mb-3">
        <NavLink to="/">
          <Logo size="text-base" headerLogo={true} />
        </NavLink>
      </div>
      {user ? <NavigationLogin user={user} logout={logout} /> : <NavigationNotLogin />}
    </header>
  );
}

export default Header;
