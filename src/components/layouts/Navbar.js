import React from 'react';

import BootstrapNavbar from 'react-bootstrap/Navbar'

import './Navbar.css'

export default function Navbar () {
  return (
    <BootstrapNavbar className="main-navbar">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Magazine da Leh</a>
      </div>
    </BootstrapNavbar>
  )
}
