import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-dark-purple dark:text-light-green"
          : "text-dark-grey dark:text-white"
      } dark:hover:text-light-green hover:text-dark-purple transition duration-500 font-mono font-light`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
