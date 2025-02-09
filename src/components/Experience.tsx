import ExperienceCard from "./ExperienceCard.tsx";
import { forwardRef } from "react";

const Experience = forwardRef<HTMLDivElement | null>(({}, ref) => {
  return (
    <div ref={ref} className="w-full min-h-full mt-20 content-center">
      <h2 className="text-center w-full text-7xl font-[courier] text-green-400 mb-12">
        Experience
      </h2>
      <div className="w-full flex justify-center">
        <ExperienceCard />
      </div>
    </div>
  );
});

export default Experience;
