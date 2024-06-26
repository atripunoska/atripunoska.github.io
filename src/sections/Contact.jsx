import React from "react";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-48 pb-48 dark:text-white text-deep-blue flex justify-center"
    >
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
        <h3 className="font-playfair font-semibold text-4xl text-center mb-12">
          GET IN TOUCH
        </h3>
        <div className="mb-12 font-light font-inter  text-deep-blue dark:text-white mx-auto text-center md:w-2/3">
          <p className="mb-3">
            Ready to turn your ideas into reality? Let's collaborate!
          </p>
          <p>
            Whether you have a project in mind, want to discuss a potential
            opportunity, or just want to say hello, I'd love to hear from you.
            <br />
            <br />
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="text-center">
          <a
            href="mailto:atripunoska@gmail.com"
            className="bg-white text-deep-blue dark:bg-deep-blue dark:text-white border-deep-blue dark:border-white dark:hover:bg-white dark:hover:text-deep-blue border-2 rounded-sm py-3 px-7 font-semibold hover:bg-deep-blue hover:text-white transition duration-500 font-playfair font-light"
            name="Let's talk"
            tabIndex={0}
            role="button"
          >
            Let's talk
          </a>
        </div>
        <div className="flex justify-center my-10 gap-7">
          <SocialMediaIcons />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
