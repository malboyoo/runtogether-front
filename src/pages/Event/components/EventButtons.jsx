import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";

function EventButtons({ registered, author, handleClickSign, handleClickUnsign, error, handleDeleteEvent, id }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [toggleDelete, setToggleDelete] = useState(false);

  const status = user._id === author ? "author" : registered.includes(user._id) ? "registered" : "unregistered";

  return (
    <div className="flex flex-col items-center relative">
      {toggleDelete && (
        <div className="absolute -top-1/4 flex flex-col items-center bg-white rounded-md px-10 pb-2 z-10">
          <p className="form-error">Êtes vous sûrs de vouloir supprimer cette séance ?</p>
          <div className="flex flex-row justify-around w-full mt-2">
            <button className="btn bg-primary text-lg text-white w-32" onClick={() => setToggleDelete(false)}>
              Annuler
            </button>
            <button
              className="btn bg-red-1 text-lg text-white w-32"
              onClick={() => {
                setToggleDelete(false);
                handleDeleteEvent();
              }}
            >
              Valider
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-center text-red-1">{error}</p>}
      {status === "author" ? (
        <div className="w-full flex flex-row justify-center i">
          <button
            className="btn bg-primary text-xl text-white w-32 mx-5"
            onClick={() => navigate(`/modify-event/${id}`)}
          >
            Modifier
          </button>
          <button className="btn bg-red-1 text-xl text-white w-32 mx-5" onClick={() => setToggleDelete(true)}>
            Supprimer
          </button>
        </div>
      ) : status === "registered" ? (
        <button className="btn bg-red-1 text-xl text-white  m-auto" onClick={handleClickUnsign}>
          Se désinscrire
        </button>
      ) : (
        <button className="btn bg-primary text-xl text-white  m-auto" onClick={handleClickSign}>
          S'inscrire
        </button>
      )}
    </div>
  );
}

export default EventButtons;
