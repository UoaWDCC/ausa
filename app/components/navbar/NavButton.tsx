import Link from "next/link";
const NavButton = ({ link, name }: { link: string; name: string }) => {
  return (
    // test NavButton component
    <Link href={link}>
      <div className="border-gray-700 flex-col border-2 text-center text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-200 duration-300 w-[300px] min-h-[40px] flex items-center justify-center">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
    </Link>
  );
};

export default NavButton;
