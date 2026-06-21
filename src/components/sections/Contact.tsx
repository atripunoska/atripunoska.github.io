import { ContactForm } from '../ui/ContactForm';
import { LINKS } from '../../data/links';

export function Contact() {
  return (
    <section
      id='contact'
      className='py-[clamp(80px,12vh,160px)] bg-bg-sunken border-t border-line'
    >
      <div className='max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]'>
        <span className='inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-fg-muted mb-15 block'>
          <span className='w-[22px] h-px bg-current opacity-60 inline-block mr-2' />
          04 — Let's talk
        </span>

        <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start'>
          <div>
            <h2 className='text-[clamp(44px,7vw,96px)] font-light tracking-[-0.04em] leading-[0.98] mt-2.5'>
              Have a project
              <br />
              in mind?{' '}
              <em className='font-serif italic font-normal'>Say hi.</em>
            </h2>

            <a
              href={`mailto:${LINKS.email}`}
              className='mt-8 inline-flex items-center gap-3 text-[clamp(22px,2.6vw,32px)] tracking-[-0.015em] border-b border-line-strong pb-1.5 transition-all hover:border-fg hover:gap-4.5'
            >
              {LINKS.email}
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.6'
                className='w-5 h-5 sm:w-[22px] sm:h-[22px]'
              >
                <path d='M7 17L17 7M17 7H9M17 7v8' />
              </svg>
            </a>

            <div className='grid grid-cols-2 gap-6 mt-9 font-mono text-xs'>
              <div>
                <div className='text-fg-dim uppercase tracking-[0.08em] mb-1.5'>
                  Location
                </div>
                <div className='text-fg'>Skopje, MK · CET</div>
              </div>
              <div>
                <div className='text-fg-dim uppercase tracking-[0.08em] mb-1.5'>
                  Response
                </div>
                <div className='text-fg'>Usually within 24h</div>
              </div>
              <div>
                <div className='text-fg-dim uppercase tracking-[0.08em] mb-1.5'>
                  Open to
                </div>
                <div className='text-fg'>Full-time · Remote</div>
              </div>
              <div>
                <div className='text-fg-dim uppercase tracking-[0.08em] mb-1.5'>
                  Elsewhere
                </div>
                <div className='text-fg'>
                  <a
                    href={LINKS.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border-b border-line-strong hover:border-fg transition-colors'
                  >
                    GitHub
                  </a>
                  {' · '}
                  {LINKS.linkedin ? (
                    <a
                      href={LINKS.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='border-b border-line-strong hover:border-fg transition-colors'
                    >
                      LinkedIn
                    </a>
                  ) : (
                    <span className='text-fg-dim'>LinkedIn (add URL)</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
