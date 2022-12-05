import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function Signin() {
  const { login } = useContext(AuthContext);

  const validationSchema = yup.object({
    email: yup.string().required("Il faut préciser votre email").email("L'email n'est pas valide"),
    password: yup.string().required("Il faut préciser votre mot de passe"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  async function submit(credentials) {
    try {
      clearErrors();
      await login(credentials);
    } catch (message) {
      console.log(message);
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <div className="flex flex-auto align-center justify-center">
      <form onSubmit={handleSubmit(submit)} className="card p-8 my-20 max-w-md flex flex-col flex-auto shadow-lg">
        <h2 className="mb-5 text-2xl font-semibold italic">Connexion</h2>

        <div className="mb-5 flex flex-col">
          <label htmlFor="email" className="ml-1">
            Email
          </label>
          <input type="text" name="email" {...register("email")} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="password" className="ml-1">
            Mot de passe
          </label>
          <input type="password" name="password" {...register("password")} />
          {errors.password && <p className="form-error">{errors.password.message}</p>}
          <Link className="mt-1 text-center text-sm hover:underline hover:text-red-1" to="/forget-password">
            Mot de passe oublié ?
          </Link>
        </div>

        {errors.generic && (
          <div className="mb-5">
            <p className="form-error">{errors.generic.message}</p>
          </div>
        )}

        <div className="self-center mt-5">
          <button disabled={isSubmitting} className="btn btn-primary">
            Connexion - <i className="fa-solid fa-person-running"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
