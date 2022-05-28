import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { RoutesApp } from './RoutesApp';

import './index.css';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.min.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <RoutesApp />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  </StrictMode>
);
