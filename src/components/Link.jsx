import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage, handleClick }) => {
  const lowerCasePage = page.toLowerCase();

  function onHandleClick() {
    setSelectedPage(lowerCasePage);
    handleClick();
  }
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-dark-purple dark:text-light-green"
          : "text-dark-grey dark:text-white"
      } dark:hover:text-light-green hover:text-dark-purple transition duration-500 font-mono font-light`}
      href={`#${lowerCasePage}`}
      onClick={onHandleClick}
      name={lowerCasePage}
      tabIndex={0}
      role="button"
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
