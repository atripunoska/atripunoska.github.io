import { experience } from '../../data/experience';
import { SectionHead } from '../ui/SectionHead';
import { TimelineEntry } from '../ui/TimelineEntry';

export function Experience() {
  return (
    <section id='experience' className='py-[clamp(80px,12vh,160px)]'>
      <div className='max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]'>
        <SectionHead
          eyebrow='03 — Experience'
          title={
            <>
              Where I've <em className='font-serif italic'>worked</em> &amp;
              grown.
            </>
          }
          lede='Seven years across product teams and client work. From internships to senior-track engineering.'
        />

        <div className='relative md:pl-40'>
          {/* vertical line — desktop only */}
          <div
            className='hidden md:block absolute left-[120px] top-2 bottom-2 w-px bg-line'
            aria-hidden='true'
          />

          {experience.map((entry, index) => (
            <TimelineEntry key={entry.id} entry={entry} markIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
