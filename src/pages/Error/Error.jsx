import { Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
  let error = useRouteError();
  return (
    <main className={`${styles.error} flex flex-col items-center justify-center`}>
      <span>404</span>
      <p>{error ? error : "Oups! La page que vous demandez n'existe pas."}</p>
      <Link className={`${styles.link}`} to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
