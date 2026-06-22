import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Project } from '../../types';
import { ProjectCardHeader } from './ProjectCardHeader';
import { ProjectCardDetails } from './ProjectCardDetails';

interface ProjectCardProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function ProjectCard({
  project,
  index,
  isOpen,
  onToggle,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <article className='border-b border-line'>
      <ProjectCardHeader
        project={project}
        index={index}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className='overflow-hidden'
          >
            <ProjectCardDetails project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
