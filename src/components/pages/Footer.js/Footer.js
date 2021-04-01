import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          IJMA NewsLetter
        </h1>
        <p className='footer-subscription-text'>
          Subscribe to Ijma newsletter for weekly updates, You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Business Banking</h2>
            <Link to='/'>Features</Link>
            <Link to='/'>Perks</Link>
          </div>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/'>Press</Link>
            <Link to='/'>Partners</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Integrations</h2>
            <Link to='/'>Wise</Link>
            <Link to='/'>Slack</Link>
            <Link to='/'>Xero</Link>
            <Link to='/'>Stripe</Link>
            <Link to='/'>Shopify</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'>Live Chat</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>Phone Call</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Ijma copyright &copy; 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Footer;
