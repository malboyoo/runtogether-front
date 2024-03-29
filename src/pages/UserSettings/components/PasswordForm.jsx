import { useForm } from "react-hook-form";
import { passwordSchema } from "../../../schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser } from "../../../api/users";

function PasswordForm({ user, setToggleSettings, setUser, setMessage }) {
  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    city: user.city,
    club: user.club,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(passwordSchema),
  });

  async function submit(values) {
    setMessage("");
    try {
      clearErrors();
      const response = await editUser({ ...values, _id: user._id });
      setMessage(response.message);
      setUser({ ...user });
      setToggleSettings({
        photo: false,
        name: false,
        city: false,
        club: false,
        password: false,
      });
    } catch (error) {
      setError("generic", { type: "generic", message: error.message });
    }
  }

  return (
    <>
      <form className="my-4 flex flex-row justify-between items-center" onSubmit={handleSubmit(submit)}>
        <label className="font-semibold w-14" htmlFor="club">
          Mot de passe
        </label>
        <div className="grid grid-flow-row items-center">
          <div className="flex flex-col items-center">
            <label htmlFor="oldPassword" className="label-small">
              Mot de passe Actuel
            </label>
            <input type="password" name="oldPassword" {...register("oldPassword")} className="input-medium input" />
            {errors.oldPassword && (
              <div className="mb-5">
                <p className="form-error">{errors.oldPassword.message}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="newPassword" className="label-small">
              Nouveau mot de passe
            </label>
            <input type="password" name="newPassword" {...register("newPassword")} className="input-medium input" />
            {errors.newPassword && (
              <div className="mb-5">
                <p className="form-error">{errors.newPassword.message}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="confirmNewPassword" className="label-small">
              Confirmez mot de passe
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              {...register("confirmNewPassword")}
              className="input-medium input"
            />
            {errors.confirmNewPassword && (
              <div className="mb-5">
                <p className="form-error">{errors.confirmNewPassword.message}</p>
              </div>
            )}
          </div>
        </div>
        <div className="justify-self-end mr-2">
          <button disabled={isSubmitting} className="mr-2 text-end max-w-min justify-self-end">
            <i className="fa-solid fa-pen text-primary cursor-pointer"></i>
          </button>
          <i
            className="fa-solid fa-xmark cursor-pointer text-xl text-gray-3 ml-2"
            onClick={() =>
              setToggleSettings({
                photo: false,
                name: false,
                city: false,
                club: false,
                password: false,
              })
            }
          ></i>
        </div>
      </form>
      {errors.generic && (
        <div className="mb-5">
          <p className="form-error text-center">{errors.generic.message}</p>
        </div>
      )}
    </>
  );
}

export default PasswordForm;
