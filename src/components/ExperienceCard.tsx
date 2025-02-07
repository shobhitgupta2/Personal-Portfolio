const ExperienceCard = () => {
  return (
    <div
      className="w-2/5 min-h-72 bg-stone-900 flex-col rounded-xl flex p-4 mt-2 ring-2 ring-transparent grayscale
    hover:grayscale-0 hover:ring-green-400 transition duration-300 ease-in-out"
    >
      <h1 className="text-green-400 text-2xl font-mono ">
        Software Engineering Intern - Frontend
      </h1>
      <h2 className="text-green-400 text-xl font-mono ">
        @ Veersa Technologies
      </h2>
      <p className="text-lg font-mono text-gray-500 mt-3">
        - Worked on an entity management tool as part of a custom CRM that
        handles entities with dynamic relationships.
      </p>
      <p className="text-lg font-mono text-gray-500 mt-3">
        - Improved visual and technical consistency between different pages of
        the tool by replacing individual components with reusable ones.
      </p>
    </div>
  );
};

export default ExperienceCard;
