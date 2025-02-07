const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 md:p-6 w-full min-h-screen">
      <div className="w-[800px]">
        <p className="text-lg md:text-xl text-gray-400 font-mono mb-2">
          Nice to meet you, I'm
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-8xl select-none font-mono text-white">
          Shobhit Gupta
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold select-none text-green-500 font-mono mt-4 mb-5 ml-">
          and I like to build stuff
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-md font-mono">
          I'm currently a pre-final year student at
          <span className="text-green-400"> MIT Manipal </span>
          pursuing B.Tech (Information Technology)
        </p>
      </div>
    </div>
  );
};

export default Intro;
