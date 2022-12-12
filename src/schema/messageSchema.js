import * as yup from "yup";

export const messageSchema = yup.object({
  content: yup.string().min(1, "message trop court").max(300, "message trop long (max 300 charactères)"),
  author: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    _id: yup.string().required(),
    imageUrl: yup.string().required(),
  }),
});
