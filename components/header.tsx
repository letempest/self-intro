import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full bg-emerald-700 dark:bg-coolGray-900">
      <nav className="flex items-center justify-between max-w-4xl mx-auto my-0 px-6 md:px-8 py-2 md:py-4 md:text-xl text-gray-100 dark:text-gray-200">
        <div className="flex items-center space-x-4 md:space-x-9">
          <Link href="/">
            <a className="hover:underline hover:text-amber-600">Home</a>
          </Link>
          <Link href="/techstack">
            <a className="hover:underline hover:text-amber-600">Tech Stack</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline hover:text-amber-600">About</a>
          </Link>
        </div>
        {mounted && (
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 focus:outline-none"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              stroke={resolvedTheme === 'light' ? '#b0a91c' : '#d5db1d'}
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  resolvedTheme === 'light'
                    ? 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    : 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                }
              ></path>
            </svg>
          </button>
        )}
      </nav>
    </div>
  );
};

export { Header };
