'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const GtmTracking = () => {
const pathname = usePathname();
const searchParams = useSearchParams();

useEffect(() => {
    const handleRouteChange = () => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'pageview',
                page: pathname + (searchParams ? searchParams.toString() : ''),
            });
        }
    };

    handleRouteChange();
}, [pathname, searchParams]);

  return null;
};
