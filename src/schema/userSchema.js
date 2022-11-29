import * as yup from "yup";

export const userSchema = yup.object({
  firstName: yup
    .string()
    .required("Il faut préciser votre prénom")
    .min(2, "Prénom trop court")
    .max(30, "Prénom trop long"),
  lastName: yup.string().required("Il faut préciser votre nom").min(2, "Nom trop court").max(30, "Nom trop long"),
  city: yup.string().min(2, "Nom de ville trop court").max(40, "Nom de ville trop long"),
  club: yup.string().min(2, "Nom de Club trop court").max(40, "Nom de Club trop long"),
  email: yup.string().required("Il faut préciser votre email").email("L'email n'est pas valide"),
  password: yup
    .string()
    .required("Il faut préciser votre mot de passe")
    .matches(
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$",
      "Le mot de passe doit contenir au minimum: une majuscule, une minuscule, un numéro et 8 charactères."
    ),
  confirmPassword: yup
    .string()
    .required("Il faut préciser votre mot de passe")
    .oneOf([yup.ref("password"), null], "Le mot de passe ne correspond pas"),
});

export const nameSchema = yup.object({
  firstName: yup
    .string()
    .required("Il faut préciser votre prénom")
    .min(2, "Prénom trop court")
    .max(30, "Prénom trop long"),
  lastName: yup.string().required("Il faut préciser votre nom").min(2, "Nom trop court").max(30, "Nom trop long"),
});
