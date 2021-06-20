import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useWindowScroll } from 'hooks';

export function ScrollToTop() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const scrollY = useWindowScroll();

  useEffect(() => setMounted(true), []);

  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const className = `${
    scrollY > 200 ? 'block' : 'hidden'
  } fixed bottom-8 right-8 md:right-12 lg:right-20 xl:right-44 w-8 h-8 bg-amber-300 hover:bg-amber-400 dark:bg-gray-300 dark:hover:bg-gray-400 rounded-full focus:outline-none z-20 opacity-90`;
  const strokeColor = resolvedTheme === 'light' ? '#1e9465' : '#253545';

  return mounted ? (
    <button
      className={className}
      aria-label="Scroll to top"
      onClick={scrollHandler}
    >
      <svg
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        stroke={strokeColor}
        className="mx-auto"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          strokeWidth="2"
          d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"
        ></path>
      </svg>
    </button>
  ) : null;
}
