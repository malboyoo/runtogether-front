import * as yup from "yup";

export const eventSchema = yup.object({
  name: yup
    .string()
    .required("Il faut préciser un nom pour votre sortie")
    .min(4, "nom trop court")
    .max(70, "nom trop long"),
  date: yup.string().required(),
  description: yup.string().notRequired(),
  type: yup.string().required(),
  public: yup.boolean().required(),
});
