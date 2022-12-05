function Description({ description }) {
  return (
    <div className="flex flex-col border-2 border-gray-1 rounded-md p-5 w-full" id="info">
      <h2 className="text-xl font-semibold mb-3">Description</h2>
      <p>{description}</p>
    </div>
  );
}

export default Description;
