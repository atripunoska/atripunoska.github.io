import { useState, useEffect, useRef } from "react";
import data from "./data.json";
import Navbar from "./sections/Navbar";
import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";
ReactGA.initialize("G-W7Y6FG7HDE");

function App() {
  const divRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [selectedPage, setSelectedPage] = useState("about");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div
      className={`app relative ${isDarkMode ? "dark" : ""}`}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dark:bg-deep-blue bg-white">
        <div
          className="pointer-events-none absolute inset-0 z-40 opacity-0 transition duration-300 overflow-x-hidden"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
          }}
        />
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
        />

        <div className="w-5/6 mx-auto md:h-full">
          <Landing
            setSelectedPage={setSelectedPage}
            name={data.name}
            desc={data.description}
            role={data.role}
          />
        </div>

        <div className="w-5/6 mx-auto md:h-full ">
          <Skills
            technical={data.skills.technical}
            personal={data.skills.personal}
          />
        </div>

        <div className="w-5/6 mx-auto ">
          <Projects projects={data.projects} />
        </div>

        <div className="w-5/6 mx-auto ">
          <Experience experience={data.experience} />
        </div>
        <div className="w-5/6 mx-auto ">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
