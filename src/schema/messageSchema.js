import * as yup from "yup";

export const messageSchema = yup.object({
  content: yup
    .string()
    .required("Il faut préciser un nom pour votre sortie")
    .min(1, "message trop court")
    .max(300, "message trop long (max 300 charactères)"),
});
