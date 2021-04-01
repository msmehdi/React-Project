import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaGripfire } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaGripfire className='navbar-icon'/>
              IJMA
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/pricing'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className='nav-btn left'>
                  {button ? (
                    <Link to='/' className='btn-link'>
                      <Button buttonStyle='btn--outline'>Log In</Button>
                    </Link>
                  ) : (
                    <Link to='/' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        Log In
                      </Button>
                    </Link>
                  )}
                </li>
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/' className='btn-link'>
                      <Button buttonStyle='btn--outline' buttonSize="btn--large" buttonColor='blue'>Get Started</Button>
                    </Link>
                  ) : (
                    <Link to='/' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        Get Started
                      </Button>
                    </Link>
                  )}
                </li>
            </ul>

          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
