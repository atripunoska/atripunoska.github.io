import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently most visible in the viewport.
 * Powers the side rail's "is-active" dot state.
 *
 * sectionIds must match the actual `id` attributes on your <section> elements,
 * e.g. ['top', 'work', 'skills', 'experience', 'contact']
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Among sections currently intersecting, pick the one closest to
        // the top of the viewport — mirrors how the original rail behaved.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Section counts as "active" once it crosses the upper third of
        // the viewport, and stops counting once it scrolls past the lower third.
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
