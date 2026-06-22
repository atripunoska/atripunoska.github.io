import type { Project } from '../../types';

interface ProjectCardHeaderProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function ProjectCardHeader({
  project,
  index,
  isOpen,
  onToggle,
}: ProjectCardHeaderProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      onClick={onToggle}
      className='grid grid-cols-[44px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center gap-4 sm:gap-7 py-6 sm:py-8 cursor-pointer group'
    >
      <span className='font-mono text-xs text-fg-muted tracking-wide'>
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
            <span className='font-mono text-xs text-fg-muted'>
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
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
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
  );
}
