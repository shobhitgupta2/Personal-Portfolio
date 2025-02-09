import SocialButtons from "./SocialButtons.tsx";

const SocialsContainer = () => {
  return (
    <div className="w-2/5 h-fit flex flex-col">
      <h2 className="w-full xl:text-3xl lg:text-2xl text-xl font-[courier] text-neutral-300 mb-12">
        Feel free to send me a message or see me on other platforms
      </h2>
      <SocialButtons />
    </div>
  );
};

export default SocialsContainer;
