import type { Project } from '../../types';

interface ProjectCardDetailsProps {
  project: Project;
}

export function ProjectCardDetails({ project }: ProjectCardDetailsProps) {
  const hasLinks = Boolean(
    project.liveUrl || project.githubUrl || project.caseStudyUrl,
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 md:gap-10 pb-8'>
      <div>
        <p className='text-fg-muted max-w-[58ch] mb-3'>{project.summary}</p>

        {project.highlights.length > 0 && (
          <ul className='text-fg-muted max-w-[58ch] list-disc pl-5 space-y-1.5 mb-3'>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <dl className='grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 gap-y-2.5 font-mono text-xs mt-5 pt-5 border-t border-line'>
          <dt className='text-fg-muted uppercase tracking-wide'>Role</dt>
          <dd className='text-fg'>{project.role}</dd>

          <dt className='text-fg-muted uppercase tracking-wide'>Stack</dt>
          <dd className='text-fg'>{project.stack}</dd>

          {hasLinks && (
            <>
              <dt className='text-fg-muted uppercase tracking-wide'>Links</dt>
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
  );
}
