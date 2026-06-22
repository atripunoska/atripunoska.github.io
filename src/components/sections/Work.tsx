import { useState } from 'react';
import { projects } from '../../data/projects';
import { SectionHead } from '../ui/SectionHead';
import { ProjectCard } from '../ui/ProjectCard';
import { trackEvent } from '../../lib/analytics';

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id='work' className='py-[clamp(80px,12vh,160px)]'>
      <div className='max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]'>
        <SectionHead
          eyebrow='01 — Selected work'
          title={
            <>
              A few things I'm <em className='font-serif italic'>proud</em> of
              shipping.
            </>
          }
          lede='Click any row to expand. Each is a real project - stack, highlights, and what I actually owned.'
        />

        <div className='border-t border-line'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isOpen={openId === project.id}
              onToggle={() =>
                setOpenId((current) => {
                  const next = current === project.id ? null : project.id;
                  if (next) trackEvent('project', 'expand', project.title);
                  return next;
                })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
