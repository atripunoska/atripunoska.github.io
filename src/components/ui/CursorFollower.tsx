import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, input, textarea, [role="button"]',
      );
      ring.style.width = isInteractive ? '48px' : '28px';
      ring.style.height = isInteractive ? '48px' : '28px';
      ring.style.opacity = isInteractive ? '1' : '0.6';
    };

    const handleMouseLeaveWindow = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const handleMouseEnterWindow = () => {
      dot.style.opacity = '1';
    };

    const tick = () => {
      // lerp easing — the ring trails the dot with a bit of lag
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  // Skip entirely for reduced-motion users — no DOM nodes, no listeners.
  if (prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden='true'
        className='fixed top-0 left-0 w-7 h-7 rounded-full border border-fg pointer-events-none z-[100] opacity-60 hidden [@media(pointer:fine)]:block'
        style={{
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden='true'
        className='fixed top-0 left-0 w-1 h-1 rounded-full bg-fg pointer-events-none z-[100] hidden [@media(pointer:fine)]:block'
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
