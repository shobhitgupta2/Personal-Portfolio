const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 w-full min-h-screen text-white">
      <p className="text-xl text-gray-400 ml-1 w-1/2 self-center font-[Courier]">
        Nice to meet you, I'm
      </p>
      <h1 className="text-8xl select-none w-fit text-center font-[courier] ">
        Shobhit Gupta
      </h1>
      <h1 className="text-6xl font-semibold select-none w-fit text-center text-green-500 font-mono ml-20 mb-5">
        and I like to build stuff
      </h1>
      <p className="text-xl text-gray-400 mr-60 w-1/3 self-center font-[Courier]">
        I'm currently a pre-final year student at
        <span className="text-green-400"> MIT Manipal </span>
        pursuing B.Tech (Information Technology)
      </p>
    </div>
  );
};

export default Intro;
