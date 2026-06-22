import { NAV_SECTIONS } from '../../types/navigation';
import { useTheme } from '../../hooks/useTheme';

export function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-bg/60 border-b border-line'>
      <a
        href='#top'
        className='flex items-center gap-2 font-mono text-sm text-fg rounded-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
      >
        <span className='flex items-center justify-center w-6 h-6 rounded-full bg-fg shrink-0'>
          <svg
            viewBox='0 0 100 100'
            className='w-[18px] h-[18px] text-bg'
            aria-hidden='true'
          >
            <path
              fill='currentColor'
              transform='translate(27.91, 74.08) scale(0.095, -0.095)'
              d='M89 -9Q53 -9 33.0 22.0Q13 53 13 113Q13 170 29.0 227.5Q45 285 73.0 337.0Q101 389 136.5 429.0Q172 469 211.5 492.5Q251 516 290 516Q309 516 326.0 508.5Q343 501 354 485Q360 476 366 476Q372 476 378 485Q389 501 396.0 505.5Q403 510 409 510Q422 510 419 496L330 113Q315 48 350 48Q373 48 391.5 79.0Q410 110 429 175Q432 186 442 186Q449 186 451.0 180.0Q453 174 451 166Q432 72 400.0 31.5Q368 -9 323 -9Q284 -9 267.5 24.0Q251 57 264 114L277 169Q279 176 274.5 177.0Q270 178 267 172Q212 71 169.5 31.0Q127 -9 89 -9ZM114 42Q138 42 167.0 71.0Q196 100 224.5 146.0Q253 192 277.0 245.0Q301 298 315.5 347.0Q330 396 330 430Q330 491 287 491Q261 491 232.0 467.5Q203 444 176.5 404.0Q150 364 128.5 313.5Q107 263 94.0 208.5Q81 154 81 102Q81 67 89.5 54.5Q98 42 114 42Z'
            />
          </svg>
        </span>
        <span>ana.tripunoska</span>
      </a>

      <nav className='hidden md:flex items-center gap-1'>
        {NAV_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className='px-3 py-2 rounded-default text-sm text-fg-muted hover:text-fg hover:bg-hairline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
          >
            {/* was opacity-45 on top of text-fg-muted — dropped effective
                contrast to ~2.4:1. text-fg-muted alone is ~7.8:1, well
                past AA, so the number doesn't need dimming further. */}
            <span className='text-fg-muted mr-1.5 font-mono text-xs'>
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
        className='flex items-center justify-center w-9 h-9 rounded-full border border-line text-fg-muted hover:text-fg hover:border-line-strong hover:bg-bg-raised transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
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
