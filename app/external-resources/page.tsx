import { ChevronDown } from 'lucide-react';

const ExternalResources = () => {
  return (
    <div >
      <div className="  text-center pt-30 space-y-2">
        <h1 className="font-bold text-2xl">
          NAVIGATING THROUGH <br /> EXTERNAL RESOURCES
        </h1>
        <h2>
          insert description of the purpose <br /> of this page etc..
        </h2>
        <button className="border border-black bg-black text-white px-4 py-2 rounded opacity-80 hover:opacity-100 transition duration-300 ease-in-out">
          Explore now <ChevronDown className="inline-block" />
        </button>
      </div>
    </div>
  );
};
export default ExternalResources;
