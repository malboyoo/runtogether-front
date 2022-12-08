import EventProfile from "../EventProfile/EventProfile";

function Message({ message, index }) {
  console.log(message);
  return (
    <div
      className={`flex flex-col text-gray-3 ${
        index % 2 ? "bg-swan-white" : "bg-oasis-stream"
      } rounded-xl p-1 pl-3 mb-3`}
    >
      <div className="self-end">
        <EventProfile user={message.author} />
      </div>
      <p className="-translate-y-1 font-medium ">{message.content}</p>
    </div>
  );
}

export default Message;
