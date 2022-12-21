import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("Il faut préciser un nom pour votre sortie")
    .min(4, "nom trop court")
    .max(70, "nom trop long"),
  email: yup.string().email().required(),
  content: yup.string().required().min(2),
});
