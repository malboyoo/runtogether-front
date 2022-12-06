import { useContext } from "react";

import { AuthContext } from "../../../context/AuthContext";

function EventButtons({ registered, author, handleClickSign, handleClickUnsign, error }) {
  const { user } = useContext(AuthContext);

  const status = user._id === author ? "author" : registered.includes(user._id) ? "registered" : "unregistered";

  return (
    <div className="flex flex-col items-center">
      {error && <p className="text-center text-red-1">{error}</p>}
      {status === "author" ? (
        <button className="btn bg-red-1 text-xl text-white w-1/3 m-auto">Supprimer la sortie</button>
      ) : status === "registered" ? (
        <button className="btn bg-red-1 text-xl text-white w-1/3 m-auto" onClick={handleClickUnsign}>
          Se désinscrire
        </button>
      ) : (
        <button className="btn bg-primary text-xl text-white w-1/3 m-auto" onClick={handleClickSign}>
          S'inscrire
        </button>
      )}
    </div>
  );
}

export default EventButtons;
