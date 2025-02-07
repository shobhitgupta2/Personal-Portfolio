interface NavButtonProps {
  text: string;
  onClick?: () => void;
}

const NavButton = ({ text, onClick }: NavButtonProps) => {
  return (
    <button
      className="mt-4 mb-4 border-2 border-transparent border-b-stone-700 rounded-xl p-2 font-mono
      hover:bg-gray-800 hover:text-green-500 hover:border-green-500 transition ease-in-out duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NavButton;
