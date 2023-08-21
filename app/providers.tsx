'use client';

import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster toastOptions={{}} richColors />
      {children}
    </>
  );
};
