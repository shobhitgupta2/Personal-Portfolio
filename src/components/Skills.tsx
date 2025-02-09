import TechArray from "./TechArray.tsx";
import { forwardRef } from "react";

const Skills = forwardRef<HTMLDivElement | null>(({}, ref) => {
  return (
    <div ref={ref} className="w-full h-screen flex-col content-start">
      <h2 className="flex w-full xl:text-7xl text-5xl font-[courier] text-green-400 items-center flex-col">
        Skills
      </h2>
      <TechArray />
    </div>
  );
});

export default Skills;
