import { useState, useContext } from "react";
import Linkify from "react-linkify";
import { useParams } from "react-router-dom";
import { deleteMessage, reportMessage } from "../../../../api/event";
import { AuthContext } from "../../../../context/AuthContext";
import EventProfile from "../EventProfile/EventProfile";

function Message({ message, index, setMessages, setError, clearError }) {
  const { id } = useParams();
  const [isHover, setIsHover] = useState(false);

  const { user } = useContext(AuthContext);
  const date = new Date(message.date);
  const dateNow = new Date(Date.now()).toISOString();
  const today = date.toISOString().split("T")[0] === dateNow.split("T")[0];

  async function handleClickReportMessage(message, eventId) {
    clearError();
    try {
      if (message.isReported) {
        setError("generic", { type: "generic", message: "Ce message à déjà été signalé" });
      } else {
        const response = await reportMessage(message, eventId);
        setMessages(response);
        setError("generic", { type: "generic", message: "Le message à bien été signalé" });
      }
    } catch (error) {
      setError("generic", { type: "generic", message: error });
    }
  }

  async function handleClickDeleteMessage(message, eventId) {
    clearError();
    try {
      const response = await deleteMessage(message, eventId);
      setMessages(response);
    } catch (error) {
      setError("generic", { type: "generic", message: error });
    }
  }

   
  return (
    <div
      className={`flex flex-col text-gray-3 ${
        index % 2 ? "bg-swan-white" : "bg-oasis-stream"
      } rounded-xl p-1 pl-3 mb-3 transition-all`} 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
    <div className="flex justify-between">
        <div>
          <span className="md:text-sm text-xs pt-1">
            {today
              ? " "
              : date.toLocaleString("fr-FR", { weekday: "short" }) +
                " " +
                date.toLocaleString("fr-FR", { day: "numeric" }) +
                " " +
                date.toLocaleString("fr-FR", { month: "short" }) +
                " " +
                " "}
            {today ? date.toLocaleString("fr-FR", { hour: "2-digit" }) : ""}{" "}
            {today ? date.toLocaleString("fr-FR", { minute: "2-digit" }).padStart(2, 0) : ""}
          </span>

          {isHover &&
            (user._id === message.author._id ? (
              <button
                className="text-red-1 underline text-xs ml-2 border-0"
                onClick={() => handleClickDeleteMessage(message, id)}
              >
                Supprimer
              </button>
            ) : (
              <button
                className="text-red-1 underline text-xs ml-2 border-0"
                onClick={() => handleClickReportMessage(message, id)}
              >
                Signaler
              </button>
            ))}
        </div>
        <EventProfile user={message.author} />
      </div>

      <p className="-translate-y-1 font-medium md:text-base text-sm whitespace-pre-line">
        {message.content}
      </p>
    </div>
  );
}

export default Message;
