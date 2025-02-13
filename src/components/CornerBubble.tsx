import ArrowUp from "../assets/ArrowUp.tsx";

interface CornerButtonProps {
  handleClick: () => void;
}

const CornerBubble = ({ handleClick }: CornerButtonProps) => {
  return (
    <button
      className="w-12 h-12 bg-green-500 rounded-2xl
    fixed bottom-4 md:right-9 right-4
    flex justify-center items-center
    hover:bg-green-400 hover:text-white hover:shadow-green-500
    transition ease-in-out duration-300
    shadow-sm shadow-green-400"
      onClick={handleClick}
    >
      <ArrowUp className="w-6 h-6 stroke-2 text-gray-100" />
    </button>
  );
};

export default CornerBubble;
