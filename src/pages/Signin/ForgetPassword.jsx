import { useForm } from "react-hook-form";
import { emailSchema } from "../../schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "../../api/users";

function ForgetPassword() {
  const defaultValues = {
    email: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(emailSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      console.log("in");
      console.log(values);
      await resetPassword(values);
    } catch (error) {
      setError("generic", { type: "generic", message: error });
    }
  }

  return (
    <section className="flex flex-auto align-center justify-center">
      <div className="card p-8 my-20 max-w-xl flex flex-col flex-auto text-gray-4">
        <h2 className="text-xl text-center font-medium">Réinitialiser votre mot de passe</h2>
        <form onSubmit={handleSubmit(submit)}>
          <hr className="border border-gray-1 my-5" />
          <div className="flex flex-col items-center">
            <p className="my-2 font-medium">Veuillez entrer votre e-mail:</p>
            <input type="email" className="input-medium my-2" name="email" {...register("email")} />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
          <hr className="border border-gray-1 my-5" />
          <div className="flex flex-row justify-around my-5">
            <button disabled={isSubmitting} className="btn btn-primary text-xl">
              Réinitialiser mot de passe <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ForgetPassword;
