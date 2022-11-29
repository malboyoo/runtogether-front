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
    <header className="flex flex-row justify-between items-center p-4 bg-dark-1 h-20 shadow-lg">
      <div className="">
        <NavLink to="/">
          <Logo size="text-base" />
        </NavLink>
      </div>
      {user ? <NavigationLogin user={user} logout={logout} /> : <NavigationNotLogin />}
    </header>
  );
}

export default Header;
