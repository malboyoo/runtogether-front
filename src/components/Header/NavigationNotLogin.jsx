import { NavLink } from "react-router-dom";

function NavigationNotLogin() {
  return (
    <nav>
      <ul className="flex">
        <li className="ml-5">
          <NavLink to="signup" className="mr-15">
            <button className="btn btn-secondary">S'INSCRIRE</button>
          </NavLink>
        </li>
        <li className="ml-5">
          <NavLink to="signin" className="mr-15">
            <button className="btn btn-primary">SE CONNECTER</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationNotLogin;
