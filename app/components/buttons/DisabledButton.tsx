const DisabledButton = ({ name }: { name: string }) => {
  return (
    <button
      disabled={true}
      className="border border-gray-600 py-2 px-4 rounded-md cursor-pointer bg-gray-700 hover:bg-gray-100 transition duration-300"
    >
      <p className="text-gray-400">{name}</p>
    </button>
  );
};

export default DisabledButton;
