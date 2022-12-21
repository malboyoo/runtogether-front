import { useForm } from "react-hook-form";
import { citySchema } from "../../../schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser } from "../../../api/users";

function CityForm({ user, setToggleSettings, setUser }) {
  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
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
    resolver: yupResolver(citySchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      await editUser({ ...values, _id: user._id });
      setUser({ ...user, ...values });
      setToggleSettings({
        photo: false,
        name: false,
        city: false,
        club: false,
      });
    } catch (message) {
      setError("generic", { type: "generic", message: "une erreur generique est survenue" });
    }
  }

  return (
    <>
      <form className="my-4 flex flex-row justify-between items-center" onSubmit={handleSubmit(submit)}>
        <label className="font-semibold" htmlFor="city">
          Ville
        </label>
        <div className="flex flex-row">
          <input type="text" name="city" {...register("city")} className="mr-2 input input-large" />
        </div>

        <button disabled={isSubmitting} className="mr-2 text-end max-w-min justify-self-end">
          <i className="fa-solid fa-pen text-primary cursor-pointer"></i>
        </button>
      </form>
      <div className="text-center mb-2">
        {errors.city && <p className="form-error">{errors.city.message}</p>}
        {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      </div>
    </>
  );
}

export default CityForm;
