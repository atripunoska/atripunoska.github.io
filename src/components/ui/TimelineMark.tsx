type MarkShape = 'triangle' | 'diamond' | 'circle' | 'square';

interface TimelineMarkProps {
  shape: MarkShape;
  className?: string;
}

export function TimelineMark({ shape, className = '' }: TimelineMarkProps) {
  return (
    <svg
      viewBox='0 0 20 20'
      className={className}
      fill='currentColor'
      aria-hidden='true'
    >
      {shape === 'triangle' && <path d='M10,2 L16,14 L4,14 Z' />}
      {shape === 'diamond' && <path d='M10,2 L18,10 L10,18 L2,10 Z' />}
      {shape === 'circle' && <circle cx='10' cy='10' r='6.5' />}
      {shape === 'square' && <rect x='4' y='4' width='12' height='12' />}
    </svg>
  );
}
