import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home';
// layouts

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/character/', element: <>character1</> },
        { path: '/character/:idcharacter', element: <>characterid</> },
      ],
    },
    {
      path: '/',
      element: <>notfound</>,
      children: [
        { path: '404', element: <>404</> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
