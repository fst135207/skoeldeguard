'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LoaderThree } from '@/components/ui/loader';
import { usePathname } from 'next/navigation';

interface PageLoaderComponentProps {
  children: ReactNode;
}

export default function PageLoaderComponent({ children }: PageLoaderComponentProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
          <LoaderThree />
        </div>
      )}
      {children}
    </>
  );
}
