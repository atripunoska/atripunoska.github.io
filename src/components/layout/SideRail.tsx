import { RAIL_SECTIONS, RAIL_SECTION_IDS } from '../../types/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';

export function SideRail() {
  const activeId = useActiveSection(RAIL_SECTION_IDS);

  return (
    <nav
      aria-label='Section navigation'
      className='hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4'
    >
      {RAIL_SECTIONS.map((section) => {
        const isActive = section.id === activeId;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={section.label}
            aria-current={isActive ? 'true' : undefined}
            className='group flex items-center gap-3'
          >
            <span
              className={`block w-1.5 h-1.5 rounded-full transition-transform ${
                isActive ? 'bg-fg scale-150' : 'bg-fg-dim'
              }`}
            />
            <span
              className={`font-mono text-[11px] tracking-wide uppercase transition-all ${
                isActive
                  ? 'opacity-100 translate-x-0 text-fg'
                  : 'opacity-0 -translate-x-1 text-fg-dim group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
