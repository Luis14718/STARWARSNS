import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout';
import NotFound from './components/404';
import Home from './components/Home';
import DetailComponent from './components/DetailComponent';
// layouts

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/character/', element: <Home /> },
        { path: '/character/:idcharacter', element: <DetailComponent /> },
      ],
    },
    {
      path: '/',
      element: <NotFound />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
