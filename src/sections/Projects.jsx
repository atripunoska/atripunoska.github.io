import Project from "../components/Project";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="pt-18 pb-24 md:pt-48 md:pb-48 dark:text-white text-deep-blue"
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
          <div className="flex justify-center mt-5"></div>
        </div>
        <p className="mt-10 mb-10">
          Here are some of my personal projects I've worked on.
        </p>
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
