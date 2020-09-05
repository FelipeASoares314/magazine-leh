import React from 'react';

import './Navbar.css'

import BootstrapNavbar from 'react-bootstrap/Navbar'
import SearchInput from '../basic/forms/SearchInput'
import RoundyButton from '../basic/btns/Roundy'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <BootstrapNavbar className="main-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Magazine da Leh</a>

        <div className="mr-auto align-self-center">
          <SearchInput />
        </div>

        <RoundyButton>
          <FontAwesomeIcon className="navbar-btn" icon={faUser} />
        </RoundyButton>

        <div className="mr-2" />

        <RoundyButton>
          <FontAwesomeIcon className="navbar-btn" icon={faShoppingBasket} />
        </RoundyButton>
      </div>
    </BootstrapNavbar>
  )
}
