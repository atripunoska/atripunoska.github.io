import { skillGroups } from '../../data/skills';
import { SectionHead } from '../ui/SectionHead';
import { SkillChip } from '../ui/SkillChip';

export function Skills() {
  return (
    <section id='skills' className='py-[clamp(80px,12vh,160px)]'>
      <div className='max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]'>
        <SectionHead
          eyebrow='02 — Toolkit'
          title={
            <>
              Things I reach for when{' '}
              <em className='font-serif italic'>making</em> interfaces.
            </>
          }
          lede='A working toolkit, not a wishlist. Organized by what I actually use day-to-day to ship production UI.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-line'>
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className={`py-8 pb-9 pr-6 border-b border-line ${
                index > 0 ? 'lg:border-l lg:pl-6' : ''
              }`}
            >
              <h3 className='font-mono text-[11px] tracking-[0.14em] uppercase text-fg-muted mb-5 flex justify-between'>
                <span>{group.label}</span>
                <span className='text-fg-dim'>
                  {String(group.skills.length).padStart(2, '0')}
                </span>
              </h3>
              <div className='flex flex-wrap gap-1.5'>
                {group.skills.map((skill) => (
                  <SkillChip
                    key={skill}
                    label={skill}
                    primary={group.primary?.includes(skill)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
