import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header = () => {

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const linksContainer = document.querySelector('.links-container');
    if(linksContainer.classList.contains('mobile-nav')) {
      linksContainer.classList.remove('mobile-nav');
      mobileMenu.classList.remove('is-active');
    } else {
      linksContainer.classList.add('mobile-nav');
      mobileMenu.classList.add('is-active');
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-container__image" src={ Logo  } />
        </Link>
      </div>
      <div className="menu-toggle" id="mobileMenu" onClick={toggleMobileMenu}>
        <span className="menu-toggle__bar"></span>
        <span className="menu-toggle__bar"></span>
        <span className="menu-toggle__bar"></span>
      </div>
      <div className="links-container">
        <Link to="/" className="links-container__item">Homepage</Link>
        <Link to="/create" className="links-container__item">Create Pokemon</Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
