"use client";

import PlausibleProvider from "next-plausible";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <PlausibleProvider domain="code-et-cash.com">
        <Toaster toastOptions={{}} richColors />
        {children}
      </PlausibleProvider>
    </>
  );
};
