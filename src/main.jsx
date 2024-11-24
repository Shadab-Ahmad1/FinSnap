import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import { AuthProvider } from './context/AuthContext';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          {' '}
          {/* Wrap your App component with AuthProvider */}
          <App />
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
