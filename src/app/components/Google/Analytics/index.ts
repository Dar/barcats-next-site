'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handlePageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: pathname + (searchParams ? searchParams.toString() : ''),
        });
      }
    };

    handlePageView();
  }, [pathname, searchParams]);

  return null;
};
