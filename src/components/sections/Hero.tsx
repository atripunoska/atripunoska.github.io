import { motion, useReducedMotion } from 'framer-motion';

import { Portrait } from '../ui/Portrait';
import { LINKS } from '../../data/links';
import { trackEvent } from '../../lib/analytics';

const titleRows = [
  ["Hi, I'm Ana -"],
  ['a ', { em: 'frontend' }, ' engineer'],
  ['crafting interfaces.'],
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id='top'
      className='relative pt-[clamp(140px,18vh,220px)] pb-[clamp(80px,10vh,140px)]'
    >
      <div className='max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]'>
        <div className='flex gap-4 flex-wrap items-center font-mono text-xs text-fg-muted mb-8'>
          <span className='inline-flex items-center gap-2 px-2.5 py-1.5 pl-2 border border-line rounded-full bg-bg-raised'>
            <span className='w-[7px] h-[7px] rounded-full bg-[#7cf58a] shadow-[0_0_0_3px_rgba(124,245,138,0.15)]' />
            Open to opportunities
          </span>

          <span>Skopje / Remote · CET</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-10 md:gap-20 items-end'>
          <div>
            <h1 className='text-[clamp(44px,8.6vw,112px)] font-light tracking-[-0.045em] leading-[0.96] text-balance'>
              {titleRows.map((row, i) => (
                <span key={i} className='block overflow-hidden'>
                  <motion.span
                    initial={prefersReducedMotion ? undefined : { y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.12,
                      ease: [0.2, 0.8, 0.2, 1],
                    }}
                    className='inline-block'
                  >
                    {row.map((part, j) =>
                      typeof part === 'string' ? (
                        part
                      ) : (
                        <em key={j} className='font-serif italic font-normal'>
                          {part.em}
                        </em>
                      ),
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <p className='mt-7 text-[clamp(16px,1.15vw,18px)] text-fg-muted max-w-[52ch] leading-relaxed'>
              I work at the intersection of AEM and React — enterprise CMS
              constraints on one side, modern component architecture on the
              other. Seven years of making those two worlds talk to each other.
            </p>

            <div className='mt-9 flex gap-3 flex-wrap items-center'>
              {LINKS.resume ? (
                <a
                  href={LINKS.resume}
                  download
                  className='inline-flex items-center gap-2.5 px-[18px] py-3 rounded-full text-sm font-medium border border-accent bg-accent text-accent-ink transition-all hover:-translate-y-px hover:bg-fg hover:border-fg'
                  onClick={() => trackEvent('resume', 'download')}
                >
                  <span>Download résumé</span>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    className='w-3.5 h-3.5'
                  >
                    <path d='M12 4v12m0 0l-5-5m5 5l5-5M4 20h16' />
                  </svg>
                </a>
              ) : (
                <span className='font-mono text-[11px] text-fg-dim px-3 py-2 border border-dashed border-line rounded-full'>
                  Resume link missing — add LINKS.resume
                </span>
              )}

              <a
                href='#contact'
                className='inline-flex items-center gap-2.5 px-[18px] py-3 rounded-full text-sm font-medium border border-line-strong text-fg transition-all hover:-translate-y-px hover:bg-bg-raised hover:border-fg-muted'
              >
                <span>Get in touch</span>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  className='w-3.5 h-3.5'
                >
                  <path d='M5 12h14m0 0l-6-6m6 6l-6 6' />
                </svg>
              </a>

              <div className='flex gap-2 ml-1.5'>
                <a
                  href={LINKS.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  className='w-10 h-10 rounded-full border border-line grid place-items-center text-fg-muted transition-all hover:text-fg hover:border-fg hover:-translate-y-0.5'
                  onClick={() => trackEvent('social', 'click', 'github')}
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-4 h-4'
                  >
                    <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.94-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.11 0 1.52-.01 2.74-.01 3.11 0 .3.21.66.79.55C20.22 21.39 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5Z' />
                  </svg>
                </a>

                {LINKS.linkedin ? (
                  <a
                    href={LINKS.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                    className='w-10 h-10 rounded-full border border-line grid place-items-center text-fg-muted transition-all hover:text-fg hover:border-fg hover:-translate-y-0.5'
                    onClick={() => trackEvent('social', 'click', 'linkedin')}
                  >
                    <svg
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-4 h-4'
                    >
                      <path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.25 8h4.5V23h-4.5V8Zm7.25 0h4.31v2.05h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.91V23h-4.5v-6.66c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V23h-4.5V8Z' />
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <Portrait />
        </div>
      </div>
    </section>
  );
}
