import { useForm } from "react-hook-form";
import { nameSchema } from "../../schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser } from "../../api/users";

function EditName({ user, setToggleName }) {
  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    city: user.city,
    club: user.club,
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(nameSchema),
  });

  async function submit(values) {
    console.log(values);
    try {
      clearErrors();
      await editUser({ ...user, firstName: values.firstName, lastName: values.lastName });
      setToggleName(false);
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <form className="my-4 flex flex-row justify-between items-center" onSubmit={handleSubmit(submit)}>
      <label className="font-semibold">Nom</label>
      <div className="flex flex-row">
        <input type="text" name="firstName" {...register("firstName")} className="mr-2 input-small" />
        <input type="text" name="lastName" {...register("lastName")} className="mr-2 input-small" />
      </div>
      {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
      {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
      <button disabled={isSubmitting} className="mr-2 text-end max-w-min justify-self-end">
        <i className="fa-solid fa-pen text-primary cursor-pointer"></i>
      </button>
    </form>
  );
}

export default EditName;
