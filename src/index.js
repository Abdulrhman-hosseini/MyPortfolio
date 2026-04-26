import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import RootLayout from './Layout/RootLayOut';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <App /> },
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'projects', element: <Project /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  {
    basename: '/MyPortfolio',
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
