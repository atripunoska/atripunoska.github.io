import React from "react";

import { motion } from "framer-motion";

const Skills = ({ technical, personal }) => {
  return (
    <section id="skills" className="pt-10 pb-24 dark:text-white text-deep-blue">
      <div className="md:mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-playfair font-semibold text-4xl mb-5 ">
            MY SKILLS
          </h2>
        </motion.div>
        <div className="md:flex gap-24 mt-20">
          <div className="w-full md:w-2/3">
            <div className="text-2xl mb-6 font-semibold font-inter">
              Technical skills
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
              {technical.map((skill) => {
                return (
                  <li
                    className="font-light  font-mono flex text-sm md:text-base items-center gap-2"
                    key={skill}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="8"
                      height="8"
                      viewBox="0 0 256 256"
                    >
                      <defs></defs>
                      <g
                        style={{
                          stroke: "none",
                          strokeWidth: "0",
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: "10",
                          fill: "#fff",
                          fillRule: "nonzero",
                          opacity: "1",
                        }}
                        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                      >
                        <path
                          d="M 0 90 V 0 l 90 45 L 0 90 z"
                          className="fill-black	dark:fill-white"
                          style={{
                            stroke: "none",
                            strokeWidth: "1",
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: "10",

                            fillRule: "nonzero",
                            opacity: "1",
                          }}
                          transform=" matrix(1 0 0 1 0 0) "
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="text-2xl mb-6 font-semibold font-inter mt-20 md:mt-0">
              Soft skills
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
              {personal.map((skill) => {
                return (
                  <li
                    className="flex gap-2 items-center text-sm md:text-base mb-1"
                    key={skill}
                  >
                    <svg
                      className="w-3.5 h-3.5 text-blue-600 lg:w-3 lg:h-3 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span className="font-light font-inter">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
