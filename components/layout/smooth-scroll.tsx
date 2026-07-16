'use client';

import LenisScroll from 'lenis';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// @note provides smooth scrolling using lenis library
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const scroller = new LenisScroll({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // @note handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement && targetElement instanceof HTMLElement) {
            scroller.scrollTo(targetElement, { offset: -200, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      scroller.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname]);

  return <>{children}</>;
}
