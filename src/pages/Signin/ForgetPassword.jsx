import { useForm } from "react-hook-form";
import { emailSchema } from "../../schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "../../api/users";
import { useState } from "react";

function ForgetPassword() {
  const [sucessMsg, setSucessMsg] = useState("");
  const [failMsg, setFailMsg] = useState("");
  const [buttonOff, setButtonOff] = useState(false);
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
      const response = await resetPassword(values);
      console.log("in try:", response);
      setSucessMsg(response);
      setFailMsg("");
      setButtonOff(true);
    } catch (error) {
      console.log("in catch:", error);
      setFailMsg(error);
      setSucessMsg("");
      setError("generic", { type: "generic", message: error });
    } finally {
    }
  }

  return (
    <section className="flex flex-auto align-center justify-center">
      <div className="card p-8 md:my-16 my-10 mx-4 max-w-xl flex flex-col flex-auto text-gray-4">
        <h2 className="text-xl text-center font-medium">Réinitialiser votre mot de passe</h2>
        <form onSubmit={handleSubmit(submit)}>
          <hr className="border border-gray-1 my-5" />
          <div className="flex flex-col items-center">
            <p className="my-2 font-medium">Veuillez entrer votre e-mail:</p>
            <input type="email" className="input md:input-medium my-2" name="email" {...register("email")} />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
          <hr className="border border-gray-1 my-5" />
          <div className="flex flex-row justify-around my-5">
            <button
              disabled={isSubmitting || buttonOff}
              className="btn btn-rt2 text-xl disabled:bg-gray-2 disabled:border-gray-2"
            >
              Réinitialiser mot de passe{" "}
              <i className={`fa-solid fa-rotate-right ${isSubmitting ? "animate-spin" : ""}`}></i>
            </button>
          </div>
          <p className="text-center text-green-1">{sucessMsg}</p>
          <p className="text-center text-red-1">{failMsg}</p>
        </form>
      </div>
    </section>
  );
}

export default ForgetPassword;
