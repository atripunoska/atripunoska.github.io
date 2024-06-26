import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ReactGA from "react-ga4";

const Landing = ({ setSelectedPage, name, desc, role }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  function handleResumeClick() {
    ReactGA.event({
      category: "User",
      action: "Clicked on resume button",
    });
  }

  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 "
    >
      {/**  IMAGE SECTION **/}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full before:max-w-[500px] before:h-full before:border-2 before:border-deep-blue dark:before:border-white before:z-[-1]">
            <img
              src="assets/profile-image.webp"
              alt="profile"
              className="z-10 w-full max-width-[400px] md:max-w-[600px]"
              width={550}
              height={550}
            />
          </div>
        ) : (
          <div>
            <img
              src="assets/profile-image.webp"
              width={550}
              height={550}
              alt="profile"
              className="z-10 w-full max-width-[400px] md:max-w-[600px]"
            />
          </div>
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl md:text-6xl font-playfair z-10 text-center md:text-start text-deep-blue dark:text-white">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-center md:text-start font-mono mt-4 text-deep-blue dark:text-white">
            {role}
          </h2>
          <p className="mt-10 mb-7 text-center md:text-start text-deep-blue dark:text-white whitespace-pre-wrap">
            {desc}
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start md:gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-white text-deep-blue dark:bg-deep-blue dark:text-white border-deep-blue dark:border-white dark:hover:bg-white dark:hover:text-deep-blue border-2 rounded-sm py-3 px-7 font-semibold hover:bg-deep-blue hover:text-white transition duration-500 font-playfair font-light"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            name="contact"
            role="button"
            tabIndex={0}
          >
            Contact Me
          </AnchorLink>

          <a
            href="assets/Ana_Tripunoska_Zdravkovikj.pdf"
            title="Resume"
            target="_blank"
            className="bg-deep-blue border-2 border-deep-blue text-white dark:bg-white dark:text-deep-blue dark:hover:bg-dark-blue dark:hover:text-white dark:border-white hover:bg-white hover:text-deep-blue hover:dark:bg-deep-blue transition duration-500 py-3 px-7 flex items-center justify-center font-playfair px-10"
            onClick={handleResumeClick}
            name="resume"
            role="button"
            tabIndex={0}
          >
            Resume
          </a>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center md:justify-start my-10 gap-7">
            <SocialMediaIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
