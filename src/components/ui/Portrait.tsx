import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 36]);
  const scale = useTransform(
    scrollY,
    [0, 600],
    [1, prefersReducedMotion ? 1 : 0.91],
  );

  return (
    <div className='relative'>
      <motion.div
        ref={ref}
        style={{ y, scale }}
        className="relative aspect-[4/5] rounded-[220px_220px_28px_28px] overflow-hidden border border-line shadow-[var(--shadow)] bg-gradient-to-br from-[#1a1a1e] to-[#0e0e11] [html[data-theme='light']_&]:from-[#e8e4d8] [html[data-theme='light']_&]:to-[#d7d2c2]"
      >
        <img
          src='/profile-image.webp'
          alt='Ana Tripunoska'
          className='w-full h-full object-cover'
        />
      </motion.div>

      <div className='flex justify-between mt-3.5 font-mono text-[11px] tracking-[0.06em] uppercase text-fg-muted'>
        <span>Ana Tripunoska</span>
        <span>MMXXVI</span>
      </div>
    </div>
  );
}
