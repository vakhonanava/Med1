import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure to become better doctor
        </p>
        <p className='footer-subscription-text'>
         
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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              First Step in your Medical Practice
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>MP © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'AS
              to='/'
              target='https://www.facebook.com/%E1%83%9E%E1%83%98%E1%83%A0%E1%83%95%E1%83%94%E1%83%9A%E1%83%98-%E1%83%9C%E1%83%90%E1%83%91%E1%83%98%E1%83%AF%E1%83%94%E1%83%91%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9B%E1%83%94%E1%83%93%E1%83%98%E1%83%AA%E1%83%98%E1%83%9C%E1%83%9D-%E1%83%9E%E1%83%A0%E1%83%90%E1%83%A5%E1%83%A2%E1%83%98%E1%83%99%E1%83%90%E1%83%A8%E1%83%98-First-Steps-in-Medical-Practise-105742608734253'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>

      
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
