// typescript code
// button: design, props(title, disabled)
// https://react.dev/learn/typescript

// type ButtonType = {
//   name: string;
//   phone: number;
// };
const StandardButton = ({ name }: { name: string }) => {
  return (
    <button className="border border-gray-600 py-2 px-4 rounded-md cursor-pointer bg-gray-500 hover:bg-gray-100 transition duration-300">
      <p className="text-gray-400">{name}</p>
    </button>
  );
};

export default StandardButton;
