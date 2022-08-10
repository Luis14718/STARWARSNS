import React from 'react';

import { Outlet } from 'react-router-dom';
// material
//
import Navbar from './Navbar';
import Search from './Search';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Layout() {
  return (
    <div>
      <div className="structure">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <Navbar />
      <Search />
      <Outlet />
    </div>

  );
}
