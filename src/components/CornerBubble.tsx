import ArrowUp from "../assets/ArrowUp.tsx";

interface CornerButtonProps {
  handleClick: () => void;
}

const CornerBubble = ({ handleClick }: CornerButtonProps) => {
  return (
    <button
      className="w-12 h-12 bg-green-500 rounded-2xl
    justify-self-end fixed bottom-4 right-9
    justify-items-center text-gray-100
    hover:bg-green-400 hover:text-white hover:shadow-green-500
    transition ease-in-out duration-300
    shadow-sm shadow-green-400"
      onClick={handleClick}
    >
      <ArrowUp className="size-6 stroke-2" />
    </button>
  );
};

export default CornerBubble;
