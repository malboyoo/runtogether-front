import * as yup from "yup";

const nameRegex =
  /^$|^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

export const userSchema = yup.object({
  firstName: yup
    .string()
    .required("Il faut préciser votre prénom")
    .min(2, "Prénom trop court")
    .max(30, "Prénom trop long")
    .matches(nameRegex, "Caractères incorrects"),
  lastName: yup
    .string()
    .required("Il faut préciser votre nom")
    .min(2, "Nom trop court")
    .max(30, "Nom trop long")
    .matches(nameRegex, "Caractères incorrects"),
  city: yup.string().notRequired().max(40, "Nom de ville trop long").matches(nameRegex, "Caractères incorrects"),
  club: yup.string().notRequired().max(40, "Nom de Club trop long"),
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
    .max(30, "Prénom trop long")
    .matches(nameRegex, "Caractères incorrects"),
  lastName: yup
    .string()
    .required("Il faut préciser votre nom")
    .min(2, "Nom trop court")
    .max(30, "Nom trop long")
    .matches(nameRegex, "Caractères incorrects"),
});

export const citySchema = yup.object({
  city: yup.string().notRequired().max(50, "Nom ville trop long").matches(nameRegex, "Caractères incorrects"),
});

export const clubSchema = yup.object({
  club: yup.string().notRequired().max(50, "Nom club trop long"),
});

export const passwordSchema = yup.object({
  oldPassword: yup.string().required("Il faut préciser votre ancien mot de passe"),
  newPassword: yup
    .string()
    .required("Il faut préciser votre nouveau mot de passe")
    .matches(
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$",
      "Le mot de passe doit contenir au minimum: une majuscule, une minuscule, un numéro et 8 charactères."
    ),
  confirmNewPassword: yup
    .string()
    .required("Il faut confirmez votre nouveau votre mot de passe")
    .oneOf([yup.ref("newPassword"), null], "Le mot de passe ne correspond pas"),
});

export const emailSchema = yup.object({
  email: yup.string().required("Il faut préciser votre email").email("L'email n'est pas valide"),
});
