import Message from "./Message";

function Commentary({ messages }) {
  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md p-5  mt-3 w-full h-full " id="info">
      <h2 className="text-xl font-semibold mb-3">Commentaire</h2>
      <div className="flex flex-col w-full h-full">
        {messages.map((message, index) => (
          <Message message={message} index={index} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
}

export default Commentary;
