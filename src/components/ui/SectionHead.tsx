import type { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode; // pass JSX so you can wrap part of it in <em> for the serif italic accent
  lede: string;
}

export function SectionHead({ eyebrow, title, lede }: SectionHeadProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:items-end mb-10 md:mb-16'>
      <div>
        <span className='inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-fg-muted'>
          <span className='w-[22px] h-px bg-current opacity-60' />
          {eyebrow}
        </span>
        <h2 className='font-sans font-normal text-[clamp(32px,5vw,56px)] tracking-[-0.03em] leading-[1.02] mt-4 max-w-[22ch] text-fg'>
          {title}
        </h2>
      </div>
      <p className='text-fg-muted md:justify-self-end md:max-w-[38ch]'>
        {lede}
      </p>
    </div>
  );
}
