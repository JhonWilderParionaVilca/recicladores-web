import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { RoutesApp } from './routes';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <RoutesApp />
      </CookiesProvider>
      <ToastContainer theme="colored" />
    </BrowserRouter>
  </StrictMode>
);
