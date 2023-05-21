import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';

import './index.css';
import { I18nextProvider } from 'react-i18next';
const LazyApp = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <div>
        <Suspense>
          <LazyApp />
        </Suspense>
      </div>
    </I18nextProvider>
  </React.StrictMode>
);
