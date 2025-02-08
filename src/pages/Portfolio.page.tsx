import NavBar from "../components/NavBar.tsx";
import Intro from "../components/Intro.tsx";
import Skills from "../components/Skills.tsx";
import Experience from "../components/Experience.tsx";
import CornerBubble from "../components/CornerBubble.tsx";
import About from "../components/About.tsx";
import Contact from "../components/Contact.tsx";
import { useRef } from "react";
import Footer from "../components/Footer.tsx";
import { Toaster } from "react-hot-toast";

const PortfolioPage = () => {
  const pageTop = useRef<HTMLDivElement | null>(null);
  const skillsSection = useRef<HTMLDivElement | null>(null);
  const experienceSection = useRef<HTMLDivElement | null>(null);
  const aboutSection = useRef<HTMLDivElement | null>(null);
  const contactSection = useRef<HTMLDivElement | null>(null);
  const scrollToTopClick = () => {
    pageTop.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onNavClick = (section: string) => {
    switch (section) {
      case "skills":
        skillsSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactSection.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="h-screen overflow-y-auto bg-gradient-to-r from-zinc-800 to-stone-900 block flex-grow">
        <NavBar ref={pageTop} onClick={onNavClick} />
        <Intro />
        <Skills ref={skillsSection} />
        <Experience ref={experienceSection} />
        <About ref={aboutSection} />
        <Contact ref={contactSection} />
        <Footer />
        <CornerBubble handleClick={scrollToTopClick} />
        <Toaster position="bottom-center" />
      </div>
    </>
  );
};

export default PortfolioPage;
