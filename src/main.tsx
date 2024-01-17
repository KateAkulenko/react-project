// * Base
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

// * Routes
import router from './routes';

// * Styles(global)
import './normalize.css';
import './index.css';
import './base.module.css';


// * Render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
