import React from 'react';
import ReactDOM from 'react-dom/client';

import { RootLayout } from './root-layout';
import { Home } from '@/page/home/app';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </React.StrictMode>,
);
