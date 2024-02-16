import React from 'react';

import { AppHeader } from '@/widgets/app-header/app-header';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
