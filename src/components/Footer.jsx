import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-deep-blue px-16 py-5 text-xs font-light font-inter text-center text-white"
    >
      © {new Date().getFullYear()} Ana Tripunoska
    </footer>
  );
};

export default Footer;
