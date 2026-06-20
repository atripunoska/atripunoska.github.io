import { NAV_SECTIONS } from '../../types/navigation';
import { useTheme } from '../../hooks/useTheme';

export function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-bg/60 border-b border-line'>
      <a
        href='#top'
        className='flex items-center gap-2 font-mono text-sm text-fg'
      >
        <span className='flex items-center justify-center w-6 h-6 rounded-full bg-fg text-bg font-serif italic text-base'>
          a
        </span>
        <span>ana.tripunoska</span>
      </a>

      <nav className='hidden md:flex items-center gap-1'>
        {NAV_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className='px-3 py-2 rounded-default text-sm text-fg-muted hover:text-fg hover:bg-hairline transition-colors'
          >
            <span className='opacity-45 mr-1.5 font-mono text-xs'>
              {section.num}
            </span>
            {section.label}
          </a>
        ))}
      </nav>

      <button
        onClick={toggleTheme}
        aria-label='Toggle theme'
        title='Toggle theme'
        className='flex items-center justify-center w-9 h-9 rounded-full border border-line text-fg-muted hover:text-fg hover:border-line-strong hover:bg-bg-raised transition-colors'
      >
        {theme === 'dark' ? (
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.6'
            className='w-4 h-4'
          >
            <path d='M12 4v2M12 18v2M4 12H2M22 12h-2M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4' />
            <circle cx='12' cy='12' r='4' />
          </svg>
        ) : (
          <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
            <path d='M20 14.5A8 8 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z' />
          </svg>
        )}
      </button>
    </header>
  );
}
