import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement | null>(({}, ref) => {
  return (
    <div
      ref={ref}
      className="w-full min-h-screen relative mt-20 flex-col content-center"
    >
      <h2 className="text-center w-full xl:text-7xl lg:text-5xl text-4xl font-[courier] text-green-400 mb-12">
        About me
      </h2>
      <h3 className="text-left w-full xl:px-20 lg:px-16 px-10 xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-gray-200 font-mono">
        Why web development?
      </h3>
      <p
        className="text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-md w-full font-[courier] my-3 text-left
      xl:px-20 lg:px-16 px-10"
      >
        As someone who's tired of poorly thought-out websites that make life
        harder instead of the other way round (I'm looking at you,
        <span className="text-green-400"> banks and governments</span>), I
        figured it would be best to start my career in something that I can
        contribute to more than on a technical basis.
      </p>
      <h3 className="text-left w-full xl:px-20 lg:px-16 px-10 xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-gray-200 font-mono">
        What keeps me going?
      </h3>
      <p
        className="text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-md w-full font-[courier] my-3 text-left
      xl:px-20 lg:px-16 px-10"
      >
        Well, a love for great design and well-executed user experience is
        definitely up there, but my real answer would have to be
        <span className="text-green-400"> caffeine</span>. Lots of it (comes
        with the B.Tech degree).
      </p>
      <h3 className="text-left w-full xl:px-20 lg:px-16 px-10 xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-gray-200 font-mono">
        Why would I be a great fit at your venture?
      </h3>
      <p
        className="text-gray-300 xl:text-2xl lg:text-xl sm:text-lg text-md w-full font-[courier] my-3 text-left
      xl:px-20 lg:px-16 px-10"
      >
        One word, <span className="text-green-400"> adaptability</span>. I've
        studied in 5 different schools across 4 cities and 2 countries. New
        people, new rules, new ways of life, I've seen them all. Change is
        something that I've definitely grown more comfortable with across the
        years, and it's a quality that I bring with me everywhere.
      </p>
    </div>
  );
});

export default About;
