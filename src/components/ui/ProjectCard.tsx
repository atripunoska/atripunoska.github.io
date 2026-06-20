import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types';

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
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className='border-b border-line'>
      <div
        onClick={onToggle}
        className='grid grid-cols-[44px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center gap-4 sm:gap-7 py-6 sm:py-8 cursor-pointer group'
      >
        <span className='font-mono text-xs text-fg-dim tracking-wide'>
          {num}
        </span>

        <div>
          <div className='flex items-baseline gap-3 sm:gap-4 flex-wrap'>
            <h3
              className={`text-[clamp(22px,3.4vw,44px)] font-normal tracking-[-0.025em] leading-[1.05] transition-all duration-300 ${
                isOpen ? '' : 'group-hover:translate-x-1'
              }`}
            >
              {project.title}
            </h3>
            {project.year && (
              <span className='font-mono text-xs text-fg-dim'>
                {project.year}
              </span>
            )}
            <div className='flex gap-1.5 flex-wrap'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='font-mono text-[11px] px-2 py-1 rounded-full border border-line text-fg-muted'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-label={
            isOpen ? `Collapse ${project.title}` : `Expand ${project.title}`
          }
          aria-expanded={isOpen}
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-400 ${
            isOpen
              ? 'rotate-45 bg-fg text-bg border-fg'
              : 'border-line-strong text-fg group-hover:bg-bg-raised'
          }`}
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.8'
            className='w-3.5 h-3.5'
          >
            <path d='M12 5v14M5 12h14' />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className='overflow-hidden'
          >
            <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 md:gap-10 pb-8'>
              <div>
                <p className='text-fg-muted max-w-[58ch] mb-3'>
                  {project.summary}
                </p>

                {project.highlights.length > 0 && (
                  <ul className='text-fg-muted max-w-[58ch] list-disc pl-5 space-y-1.5 mb-3'>
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                <dl className='grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 gap-y-2.5 font-mono text-xs mt-5 pt-5 border-t border-line'>
                  <dt className='text-fg-dim uppercase tracking-wide'>Role</dt>
                  <dd className='text-fg'>{project.role}</dd>

                  <dt className='text-fg-dim uppercase tracking-wide'>Stack</dt>
                  <dd className='text-fg'>{project.stack}</dd>

                  {(project.liveUrl ||
                    project.githubUrl ||
                    project.caseStudyUrl) && (
                    <>
                      <dt className='text-fg-dim uppercase tracking-wide'>
                        Links
                      </dt>
                      <dd className='text-fg flex gap-2 flex-wrap'>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-b border-line-strong hover:border-fg transition-colors'
                          >
                            Live demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-b border-line-strong hover:border-fg transition-colors'
                          >
                            GitHub
                          </a>
                        )}
                        {project.caseStudyUrl && (
                          <a
                            href={project.caseStudyUrl}
                            className='border-b border-line-strong hover:border-fg transition-colors'
                          >
                            Case study
                          </a>
                        )}
                      </dd>
                    </>
                  )}
                </dl>
              </div>

              {project.image && (
                <div className='aspect-[4/3] rounded-default border border-line overflow-hidden'>
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
