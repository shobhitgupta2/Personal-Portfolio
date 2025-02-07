import NavButton from "./NavButton.tsx";
import { forwardRef } from "react";

interface NavBarProps {
  onClick: (section: string) => void;
}

const NavBar = forwardRef<HTMLDivElement | null, NavBarProps>(
  ({ onClick }, ref) => {
    return (
      <nav
        ref={ref}
        className="w-full h-auto flex justify-end text-gray-500 text-xl gap-8 pr-4"
      >
        <NavButton
          text="Skills"
          onClick={() => {
            onClick("skills");
          }}
        />
        <NavButton text="Experience" onClick={() => onClick("experience")} />
        <NavButton text="About me" onClick={() => onClick("about")} />
        <NavButton text="Contact" onClick={() => onClick("contact")} />
      </nav>
    );
  },
);

export default NavBar;
