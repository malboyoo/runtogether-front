import Linkify from "react-linkify";

function Description({ description }) {
  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md md:p-5 p-3 w-full" id="info">
      <h2 className="md:text-xl text-lg font-semibold mb-3">Description</h2>
      <p className="text-sm md:text-base">
        <Linkify>{description}</Linkify>
      </p>
    </div>
  );
}

export default Description;
