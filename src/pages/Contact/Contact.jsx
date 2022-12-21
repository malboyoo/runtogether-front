import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schema/contactSchema";
import { sendMessageContact } from "../../api/contact.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const defaultValues = {
    name: "",
    email: "",
    content: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(contactSchema),
  });

  async function submit(value) {
    try {
      clearErrors();
      const response = await sendMessageContact(value);
      setSuccessMsg(response.message);
      reset();
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <main className="flex flex-col flex-auto items-center justify-center bg-gray-3 mx-4">
      <button className="btn btn-rt1 self-start w-16 px-4 shadow-2xl mt-5" onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <form
        onSubmit={handleSubmit(submit)}
        className="card p-4 md:p-8 md:my-16 mt-5 mx-4 max-w-4xl w-full flex flex-col flex-auto shadow-lg text-gray-4"
      >
        <h2 className="text-xl md:text-2xl font-semibold italic">Formulaire de contact</h2>
        <hr className="border border-gray-1 my-5" />

        <div className="mb-5 flex flex-col">
          <label htmlFor="name" className="md:text-lg text-base">
            Nom
          </label>
          <input type="text" name="name" {...register("name")} className="input mt-2 input-large" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="email" className="md:text-lg text-base">
            E-mail
          </label>
          <input type="email" name="email" {...register("email")} className="input mt-2 input-large" />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="content" className="md:text-lg text-base">
            Message
          </label>
          <textarea
            type="text"
            name="content"
            {...register("content")}
            className="border-2 border-gray-2 rounded-md p-2 mt-2 input h-36 md:text-sm text-xs"
          />
          {errors.content && <p className="form-error">{errors.content.message}</p>}
        </div>

        {errors.generic && (
          <div className="mb-5">
            <p className="form-error">{errors.generic.message}</p>
          </div>
        )}
        {successMsg && (
          <div className="mb-5">
            <p className="success-msg">{successMsg}</p>
          </div>
        )}
        <hr className="border border-gray-1 my-5" />
        <div className="self-center mt-5">
          <button disabled={isSubmitting} className="btn btn-rt1">
            Envoyer - <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
