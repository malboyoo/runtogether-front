import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("Il faut préciser votre nom")
    .min(3, "nom trop court")
    .max(70, "nom trop long"),
  email: yup.string().email().required("l'e-mail est obligatoire"),
  content: yup.string().required("veuillez précisez le contenu du message").min(2, "message trop court"),
});
