import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between p-5">
      <div className="">
        <NavLink to="/">
          <strong>JWT</strong>
        </NavLink>
      </div>
      <ul className="">
        <NavLink to="signup" className="mr-15">
          Inscription
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
