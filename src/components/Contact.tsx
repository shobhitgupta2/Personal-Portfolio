import { forwardRef } from "react";
import MessageBox from "./MessageBox.tsx";
import SocialsContainer from "./SocialsContainer.tsx";

const Contact = forwardRef<HTMLDivElement | null>(({}, ref) => {
  return (
    <div
      ref={ref}
      className="w-full min-h-full flex-col mt-20 items-center content-center"
    >
      <h2 className="text-center w-full xl:text-7xl text-5xl font-[courier] text-green-400 mb-12">
        Contact
      </h2>
      <h2 className="text-center md:w-3/4 w-full justify-self-center xl:text-5xl md:text-3xl text-xl font-[courier] text-neutral-400 mb-12">
        Up for a chat? I'd love to discuss opportunities!
      </h2>
      <div className="w-full h-4/5 flex lg:flex-row flex-col-reverse justify-items-start items-center lg:items-start lg:justify-center lg:gap-x-24 gap-y-6 my-12">
        <MessageBox />
        <SocialsContainer />
      </div>
    </div>
  );
});

export default Contact;
