import SocialButtons from "./SocialButtons.tsx";

const SocialsContainer = () => {
  return (
    <div className="lg:w-2/5 w-3/5 lg:p-0 items-center h-fit flex flex-col">
      <h2 className="w-full xl:text-3xl lg:text-2xl text-lg font-[courier] lg:text-left text-center text-neutral-300 mb-12">
        Feel free to send me a message or see me on other platforms:
      </h2>
      <div className="items-center flex flex-col">
        <SocialButtons />
      </div>
    </div>
  );
};

export default SocialsContainer;
