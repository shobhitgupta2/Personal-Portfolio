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
        className="w-full h-auto flex md:justify-end justify-center text-gray-500 md:text-xl sm:text-sm text-[0.6rem] md:gap-8 gap-4 lg:pr-4 md:pr-2 pr-0"
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
