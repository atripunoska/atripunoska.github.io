import React from "react";
import { motion } from "framer-motion";

import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { useState } from "react";

const Experience = ({ experience }) => {
  const firstEL = experience[0].company;
  const [verticalActive, setVerticalActive] = useState(firstEL);

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <section
      id="experience"
      className="pt-18 pb-18 md:pt-48 md:pb-48 dark:text-white text-deep-blue"
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
        <h3 className="font-playfair font-semibold text-4xl mb-5">
          EXPERIENCE
        </h3>
      </motion.div>

      <motion.div
        className="mt-24 md:mt-48 md:flex md:w-4/5 mx-auto gap-3 items-start min-h-max"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <TETabs
          role="tablist"
          aria-label="Work experience tabs"
          className="flex-row overflow-x-scroll flex-nowrap md:overflow-x-auto md:flex-col border-b-2 md:border-b-0"
        >
          {experience.map((item) => {
            return (
              <TETabsItem
                role="tab"
                aria-selected={verticalActive === item.company}
                tabIndex={verticalActive === item.company ? 0 : -1}
                aria-controls={item.company}
                key={item.company}
                onClick={() => handleVerticalClick(item.company)}
                active={verticalActive === item.company}
                className={`dark:hover:!bg-white dark:hover:!text-black text-left !px-2 !border-b-0 md:border-l-2 !my-0  !border-gray-200 hover:!border-transparent hover:!bg-deep-blue hover:!text-white  whitespace-nowrap ${
                  verticalActive === item.company
                    ? "dark:!border-white !border-black dark:!text-light-green !text-dark-purple"
                    : "dark:!border-gray-800"
                } `}
              >
                {item.company}
              </TETabsItem>
            );
          })}
        </TETabs>

        <TETabsContent>
          {experience.map((item) => {
            return (
              <TETabsPane
                show={verticalActive === item.company}
                key={item.company + item.date}
                role="tabpanel"
                tabIndex="0"
                aria-labelledby={item.company}
              >
                <div className="mb-2">
                  <span className="font-mono">{item.role}</span> @{" "}
                  <span className="font-bold">{item.company}</span>
                </div>
                <div className="font-inter text-xs mb-5 font-mono">
                  {item.date}
                </div>
                <ul className="text-sm">
                  {item.bullet_points.map((bullet) => {
                    return (
                      <li
                        className="flex items-center gap-2 mb-2"
                        key={Math.random()}
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

                        <span className="font-inter">{bullet}</span>
                      </li>
                    );
                  })}
                </ul>
                <ul className="flex gap-2 mt-4 flex-wrap">
                  {item.skills.map((skill) => {
                    return (
                      <li
                        className="p-2 text-xs font-mono text-dark-purple dark:text-light-green dark:bg-transparent"
                        key={skill}
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </TETabsPane>
            );
          })}
        </TETabsContent>
      </motion.div>
    </section>
  );
};

export default Experience;
