import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import useLenis from './hooks/useLenis.js';
//Paginas del menu y error 404
import HomePage from './pages/Home/Home.jsx';
import Bio from './pages/Bio/Bio.jsx';
import Music from './pages/Music/Music.jsx';
import LiveSets from './pages/Live-Sets/Live-Sets.jsx';
import Downloads from './pages/Download/Download.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/bio',
    element: <Bio />,
    errorElement: <NotFound />,
  },
  {
    path: '/music',
    element: <Music />,
    errorElement: <NotFound />,
  },
  {
    path: '/live-sets',
    element: <LiveSets />,
    errorElement: <NotFound />,
  },
  {
    path: '/download',
    element: <Downloads />,
    errorElement: <NotFound />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <NotFound />,
  },
])

const App = () => {
  useLenis();
  return (
      <RouterProvider router={router} />
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <App />
  </StrictMode>,
);