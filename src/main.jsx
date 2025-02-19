import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "regenerator-runtime/runtime";
import { SidebarProvider } from './context/CounterContext.jsx';
import Loader from './components/Loader.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
