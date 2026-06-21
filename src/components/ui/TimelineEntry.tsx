import type { ExperienceEntry } from '../../types';

interface TimelineEntryProps {
  entry: ExperienceEntry;
  markIndex: number; // cycles through co-mark glyphs for visual variety
}

const MARKS = ['▲', '◆', '●', '■'];

export function TimelineEntry({ entry, markIndex }: TimelineEntryProps) {
  const mark = MARKS[markIndex % MARKS.length];

  return (
    <article className='group relative pt-[22px] pb-[22px] border-t border-line last:border-b grid grid-cols-1 gap-3 md:pl-0'>
      {/* timeline dot — desktop only */}
      <span
        className='hidden md:block absolute -left-[41px] top-[32px] w-[9px] h-[9px] rounded-full bg-bg border border-fg-muted transition-colors duration-200 group-hover:bg-fg group-hover:border-fg'
        aria-hidden='true'
      />

      <div className='font-mono text-[11px] tracking-[0.08em] uppercase text-fg-muted md:absolute md:-left-40 md:top-[26px] md:w-[120px]'>
        {entry.period}
      </div>

      <div className='flex justify-between items-baseline gap-4 flex-wrap'>
        <h3 className='text-[clamp(20px,2.4vw,26px)] font-normal tracking-[-0.02em]'>
          {entry.role}
        </h3>
        <span className='font-mono text-xs text-fg-muted inline-flex items-center gap-2'>
          <span
            className='w-[18px] h-[18px] rounded-[4px] bg-bg-raised border border-line grid place-items-center font-serif italic text-xs text-fg'
            aria-hidden='true'
          >
            {mark}
          </span>
          {entry.companyUrl ? (
            <a
              href={entry.companyUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-fg transition-colors'
            >
              {entry.company}
            </a>
          ) : (
            entry.company
          )}
          {entry.current && <span className='text-fg'>· Current role</span>}
        </span>
      </div>

      <p className='text-fg-muted max-w-[68ch]'>{entry.summary}</p>

      {entry.skills && entry.skills.length > 0 && (
        <div className='flex flex-wrap gap-1.5 mt-1'>
          {entry.skills.map((skill) => (
            <span
              key={skill}
              className='font-mono text-[11px] px-2 py-1 rounded-full bg-bg-raised border border-line text-fg-muted'
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
