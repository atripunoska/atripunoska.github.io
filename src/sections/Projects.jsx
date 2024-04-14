import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, image, liveUrl, github, techStack }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <div className="text-center text-sm mt-4">Build with:</div>
        <ul className="flex gap-3">
          {techStack.map((tech) => {
            return (
              <li key={tech} className="text-xs font-mono">
                {tech}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2 items-center mt-4">
          <a
            href={liveUrl}
            target="_blank"
            title="Project URL"
            rel="noreferrer"
          >
            <svg
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.1"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path>
                <path d="M40 20h-2v-8h-8v-2h10z"></path>
                <path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path>
              </g>
            </svg>
          </a>
          <a href={github} target="_blank" title="Github URL" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-black"
              width={30}
              height={30}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <img src={image} alt={title} />
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="pt-48 pb-48 dark:text-white text-deep-blue"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <h3 className="font-playfair font-semibold text-4xl">PROJECTS</h3>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Some projects I've worked on.</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => {
            return (
              <Project
                title={project.projectName}
                description={project.projectDescription}
                image={project.projectImage}
                liveUrl={project.projectLiveUrl}
                github={project.projectGithubUrl}
                techStack={project.techStack}
                key={project.projectName}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
