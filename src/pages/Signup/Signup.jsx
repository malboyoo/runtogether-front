import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../api/users";
//import { useNavigate } from "react-router-dom";

function Signup() {
  //const navigate = useNavigate();

  const validationSchema = yup.object({
    lastName: yup.string().required("Il faut préciser votre nom").min(2, "Un vrai nom"),
    firstnName: yup.string().required("Il faut préciser votre nom").min(2, "Un vrai nom"),
    email: yup.string().required("Il faut préciser votre email").email("L'email n'est pas valide"),
    password: yup.string().required("Il faut préciser votre mot de passe").min(6, "Mot de passe trop court"),
    confirmPassword: yup.string().required("Il faut préciser votre mot de passe").min(6, "Mot de passe trop court"),
  });

  const initialValues = {
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (user) => {
    try {
      clearErrors();
      await createUser(user);
      //navigate("/signin");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className="flex flex-auto align-center justify-center">
      <form onSubmit={submit} className="card p-8 mt-10 max-w-md flex flex-col flex-auto">
        <h2 className="mb-5 text-xl">Inscription</h2>

        <div className="mb-5 flex flex-col">
          <label htmlFor="firstName" className="ml-1">
            Prénom
          </label>
          <input type="text" name="firstName" {...register("firstName")} />
          {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="lastName" className="ml-1">
            Nom
          </label>
          <input type="text" name="lastName" {...register("lastName")} />
          {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
        </div>

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
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="confirmPassword" className="ml-1">
            Confirmez mot de passe
          </label>
          <input type="password" name="confirmPassword" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="form-error">{errors.confirmPassword.message}</p>}
        </div>

        {errors.generic && (
          <div className="mb-5">
            <p className="form-error">{errors.generic.message}</p>
          </div>
        )}
        <div className="self-center mt-5">
          <button disabled={isSubmitting} className="btn btn-primary ">
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
