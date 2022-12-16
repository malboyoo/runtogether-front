import Message from "./Message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema } from "../../../../schema/messageSchema";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { sendMessage } from "../../../../api/event";
import { useParams } from "react-router-dom";

function Commentary({ eventMessages, isRegistered }) {
  const [messages, setMessages] = useState(eventMessages);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const defaultValues = {
    content: "",
    author: {
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
      imageUrl: user.imageUrl,
    },
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(messageSchema),
  });

  async function submit(value) {
    clearErrors();
    try {
      const response = await sendMessage(value, id);
      setMessages([...messages, response]);
      reset();
    } catch (message) {
      console.log(message);
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md md:p-5 p-3  mt-3 w-full h-full " id="info">
      <h2 className="md:text-xl text-lg font-semibold mb-3">Commentaire</h2>
      <div className="flex flex-col w-full h-full">
        {messages.map((message, index) => (
          <Message
            message={message}
            index={index}
            key={crypto.randomUUID()}
            setMessages={setMessages}
            setError={setError}
            clearError={clearErrors}
          />
        ))}
      </div>
      {isRegistered && (
        <form className="flex flex-row mt-1 w-full" onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            className="mr-2 md:h-9 h-7 md:text-base text-xs flex-auto  border-gray-1"
            {...register("content")}
          />
          <button className="btn btn-rt2 h-7 w-7 md:h-9 md:w-9 flex flex-row items-center justify-center">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      )}
      <div>
        {errors.content && <p className="form-error">{errors.content.message}</p>}
        {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      </div>
    </div>
  );
}

export default Commentary;
