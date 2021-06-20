import { useEffect, useState } from 'react';

export const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    function handleScroll(): void {
      setScrollY(window.scrollY);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures that effect is only run on mount

  return scrollY;
};
