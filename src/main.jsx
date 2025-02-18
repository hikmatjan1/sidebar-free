import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Loader from './components/Loader.jsx';
import { SidebarProvider } from './context/CounterContext.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Suspense>
  </StrictMode>,
)
