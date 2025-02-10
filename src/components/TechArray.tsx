import ReactLogo from "../assets/ReactLogo.tsx";
import TailwindLogo from "../assets/TailwindLogo.tsx";
import ReduxLogo from "../assets/ReduxLogo.tsx";
import TSLogo from "../assets/TSLogo.tsx";
import JSLogo from "../assets/JSLogo.tsx";
import RHFLogo from "../assets/RHFLogo.tsx";

const TechArray = () => {
  const frontendLogos = [
    TSLogo,
    JSLogo,
    ReactLogo,
    TailwindLogo,
    ReduxLogo,
    RHFLogo,
  ];

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-0 md:w-3/4 w-full justify-self-center h-fit justify-items-center">
      {frontendLogos.map((Logo, index) => (
        <div
          key={index}
          className="lg:w-56 lg:h-56 sm:w-48 sm:h-48 w-32 h-32
          my-10 xl:p-4 md:p-2 p-1 rounded-xl
        flex items-center justify-center
        grayscale hover:grayscale-0
        border-2 border-stone-800 shadow-2xl shadow-neutral-800 hover:shadow-neutral-700
        transition duration-300 backdrop-blur-sm"
        >
          <Logo className="w-4/5 h-4/5 transition ease-in-out duration-300" />
        </div>
      ))}
    </div>
  );
};

export default TechArray;
