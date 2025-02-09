import GitHubLogo from "../assets/GitHubLogo.tsx";
import LinkedInLogo from "../assets/LinkedInLogo.tsx";
import LeetCodeLogo from "../assets/LeetCodeLogo.tsx";

const SocialButtons = () => {
  return (
    <div className="flex flex-row lg:gap-10 md:gap-4 gap-2">
      <a
        className="aspect-square lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 p-1 rounded-3xl bg-zinc-700 border-2 border-transparent flex items-center justify-center
      hover:bg-zinc-900 hover:border-green-400 transition ease-in-out duration-300"
        href="https://github.com/shobhitgupta2"
        target="_blank"
      >
        <GitHubLogo className="h-4/5 w-4/5" />
      </a>
      <a
        className="aspect-square lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 p-1 rounded-3xl bg-zinc-700 border-2 border-transparent flex items-center justify-center
      hover:bg-zinc-900 hover:border-green-400 transition ease-in-out duration-300"
        href="https://www.linkedin.com/in/shobhit-gupta-81928a249/"
        target="_blank"
      >
        <LinkedInLogo className="h-4/5 w-4/5" />
      </a>
      <a
        className="aspect-square lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 p-1 rounded-3xl bg-zinc-700 border-2 border-transparent flex items-center justify-center
      hover:bg-zinc-900 hover:border-green-400 transition ease-in-out duration-300"
        href="https://leetcode.com/u/shobhitgupta2003/"
        target="_blank"
      >
        <LeetCodeLogo className="h-4/5 w-4/5" />
      </a>
    </div>
  );
};

export default SocialButtons;
