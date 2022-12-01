import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../schema/userSchema.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = userSchema;

  const defaultValues = {
    firstName: "",
    lastName: "",
    city: "",
    club: "",
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
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      await createUser(values);
      await login(values);
      navigate("../");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <div className="flex flex-auto align-center justify-center">
      <form onSubmit={handleSubmit(submit)} className="card p-8 my-20 max-w-md flex flex-col flex-auto shadow-lg">
        <h2 className="mb-5 text-2xl font-semibold italic">Inscription</h2>

        <div className="mb-5 flex flex-col">
          <label htmlFor="firstName" className="ml-1">
            Prénom *
          </label>
          <input type="text" name="firstName" {...register("firstName")} />
          {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="lastName" className="ml-1">
            Nom *
          </label>
          <input type="text" name="lastName" {...register("lastName")} />
          {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="city" className="ml-1">
            Ville
          </label>
          <input type="text" name="city" {...register("city")} />
          {errors.city && <p className="form-error">{errors.city.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="club" className="ml-1">
            Club
          </label>
          <input type="text" name="club" {...register("club")} />
          {errors.club && <p className="form-error">{errors.club.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="email" className="ml-1">
            Email *
          </label>
          <input type="text" name="email" {...register("email")} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="password" className="ml-1">
            Mot de passe *
          </label>
          <input type="password" name="password" {...register("password")} />
          {errors.password && <p className="form-error">{errors.password.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="confirmPassword" className="ml-1">
            Confirmez mot de passe *
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
          <button disabled={isSubmitting} className="btn btn-primary">
            Valider - <i className="fa-solid fa-person-running"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
