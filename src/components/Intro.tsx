const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 w-full min-h-screen text-white">
      <p className="lg:text-xl text-sm text-gray-400 xl:ml-40 lg:w-3/5 xl:text-left w-full text-center font-[Courier]">
        Nice to meet you, I'm
      </p>
      <h1 className="xl:text-8xl md:text-6xl text-4xl select-none lg:w-4/5 w-full text-center font-[courier] ">
        Shobhit Gupta
      </h1>
      <h1 className="xl:text-6xl md:text-4xl text-2xl font-semibold select-none w-full text-center text-green-500 font-mono xl:pl-20 mb-5">
        and I like to build stuff
      </h1>
      <p className="lg:text-xl text-sm text-gray-400 xl:ml-36 lg:ml-20 lg:w-3/5 md:w-2/5 w-3/5 self-center lg:text-left text-center font-[Courier]">
        I'm currently a pre-final year student at
        <span className="text-green-400"> MIT Manipal </span>
        pursuing B.Tech (Information Technology)
      </p>
    </div>
  );
};

export default Intro;
