import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../../../api/users";
import { AuthContext } from "../../../context/AuthContext";

function DeleteAccount() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const deleteAccount = async () => {
    try {
      await deleteUser();
      logout();
      navigate("../");
      console.log("navigate passed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-auto align-center justify-center">
      <div className="card p-8 my-20 max-w-xl flex flex-col flex-auto text-gray-4">
        <h2 className="text-red-1 text-3xl text-center">Êtes vous sûrs de vouloir supprimer votre compte ?</h2>
        <hr className="border border-gray-1 my-5" />
        <p className="my-10 text-red-1 italic">
          Cette action est irréversible et toutes vos données personnelles liée à <b>Runtogether.fr</b> seront
          supprimées définitivement.
        </p>
        <hr className="border border-gray-1 my-5" />
        <div className="flex flex-row justify-around my-5">
          <button onClick={deleteAccount} className="btn bg-red-1 text-xl">
            Oui, supprimez mon compte <i className="fa-solid fa-right-from-bracket ml-3"></i>
          </button>
          <Link to="/settings">
            <button className="btn btn-primary">Annuler</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DeleteAccount;
