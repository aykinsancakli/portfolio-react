import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { ReactComponent as HamburgerMenu } from '../assets/icons/HamburgerMenu.svg';
import { ReactComponent as CloseMenu } from '../assets/icons/CloseMenu.svg';

const navLinks = [
  {
    name: 'home',
    link: '#home',
  },
  {
    name: 'about',
    link: '#about',
  },
  {
    name: 'projects',
    link: '#projects',
  },
  {
    name: 'contact',
    link: '#contact',
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMobileNav() {
    setIsOpen(true);
  }

  function handleCloseMobileNav() {
    setIsOpen(false);
  }

  function scrollTop() {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' });
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="nav">
        <img className="logo" src={logo} alt="logo" onClick={scrollTop} />

        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        {isOpen ? (
          <span className="close-menu" onClick={handleCloseMobileNav}>
            <CloseMenu className="close-menu-icon" />
          </span>
        ) : (
          <span className="hamburger-menu" onClick={handleOpenMobileNav}>
            <HamburgerMenu className="hamburger-menu-icon" />
          </span>
        )}
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'open-menu' : 'closed-menu'}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link} onClick={handleCloseMobileNav}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? 'open-overlay' : 'closed-overlay'}`}
        onClick={handleCloseMobileNav}
      >
        &nbsp;
      </div>
    </>
  );
}
