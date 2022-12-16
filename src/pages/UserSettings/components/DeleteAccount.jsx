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
    <section className="flex flex-auto align-center justify-center bg-gray-3">
      <div className="card p-4 md:p-8 md:my-16 my-10 mx-4 max-w-xl flex flex-col flex-auto text-gray-4">
        <h2 className="text-red-1 text-3xl text-center">Êtes vous sûrs de vouloir supprimer votre compte ?</h2>
        <hr className="border border-gray-1 my-5" />
        <p className="my-10 text-red-1 italic">
          Cette action est irréversible et toutes vos données personnelles liée à <b>runtogether.fr</b> seront
          supprimées définitivement.
        </p>
        <hr className="border border-gray-1 my-5" />
        <div className="flex flex-col md:flex-row md:justify-around items-center my-5">
          <button onClick={deleteAccount} className="btn bg-red-1 text-xl text-dark-2 mb-4 md:mb-0 ">
            Oui, supprimez mon compte <i className="fa-solid fa-right-from-bracket ml-3"></i>
          </button>
          <Link to="/settings">
            <button className="btn btn-rt1">Annuler</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DeleteAccount;
