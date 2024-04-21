import { useState } from "react";
import Link from "../components/Link";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  isDarkMode,
  handleDarkMode,
}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  const navbarBackground = isTopOfPage
    ? ""
    : "bg-white dark:bg-deep-blue/80 sm:drop-shadow-md sm:dark:backdrop-blur-md";

  function handleClick() {
    if (!isAboveSmallScreens) {
      setIsMenuToggled(false);
    }
  }
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4 isolate`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src="/assets/logo.svg" alt="Logo" className="w-12 h-auto" />

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-12 lg:gap-16 font-opensans text-sm font-semibold items-center ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            />
            <Link
              page="Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={handleClick}
            />
            <button
              onClick={handleDarkMode}
              className="h-10 w-10 rounded-lg p-2 z-50 relative"
              aria-label="Toggle dark/light mode"
            >
              {!isDarkMode ? (
                <svg fill="gray-400" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg fill="#fff" viewBox="0 0 20 20">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleDarkMode}
              className="h-10 w-10 p-2 z-50 relative"
              aria-label="Toggle dark/light mode"
            >
              {!isDarkMode ? (
                <svg fill="gray-400" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg fill="#fff" viewBox="0 0 20 20">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
            <button
              className="p-2"
              aria-label="Menu open"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                  className="fill-black dark:fill-white"
                />
              </svg>
            </button>
          </div>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full dark:bg-deep-blue bg-white w-full">
            <div className="flex justify-end p-12 ">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="absolute top-8 right-12"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    className="fill-black dark:fill-white"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-10 text-2xl dark:text-white text-deep-blue justify-center text-center">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              />
              <Link
                page="Experience"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={handleClick}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
