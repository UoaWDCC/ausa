import NavButton from "./components/navbar/NavButton";
import StandardButton from "./components/buttons/StandardButton";
import DisabledButton from "./components/buttons/DisabledButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="font-sans">
        Whereas disregard and contempt for
        <NavButton href="google.com" label="TEST" />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {" "}
        <StandardButton name="eve" />
        <StandardButton name="1" />
        <StandardButton name="2" />
        <StandardButton name="3" />
        <DisabledButton name="Disabled" />
      </div>
    </div>
  );
};
export default Home;
