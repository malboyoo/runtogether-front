import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-10 flex flex-col justify-center bg-gray-5 text-center">
      <nav>
        <ul className="text-logo-1 text-sm">
          <li className="hover:underline">
            <a href="mailTo:thibaut.lefevre.dev@gmail.com">
              Contacter le support <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li className="hover:underline">
            <Link to="/cookie">
              Charte d’utilisation des cookies <i className="fa-solid fa-cookie"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <span className="mt-4">Copyright © 2022-2023 runtogether.fr</span>
    </footer>
  );
}

export default Footer;
