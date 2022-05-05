import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './pages/Dropdown';
import {useTranslation} from 'react-i18next'
// import imageSlider from './components/imageSlider';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const[dropdown , setDropdown] = useState(false);
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if(window.innerWidth < 960){
      setDropdown(false);
    } else{
      setDropdown(true);
    }
  };

  const  onMouseLeave = () => {
    if(window.innerWidth < 960){
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Medical Practice
            <i class='' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'
              onMouseEnter ={onMouseEnter}
              onMouseLeave ={onMouseLeave}
            >
              <Link
              
                to='/partners'
                className='nav-links'
                onClick={closeMobileMenu}    
              >
                Partners <i className='fas fa-caret-down'/>
              </Link>
              {dropdown && <Dropdown/>}
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Upload Resume
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Upload Resume</Button>}
        </div>
         <li className="nav-item">
            <select>
              <option value="en">Eng</option>
              <option value="en">Geo</option>
            </select>
            <Link 
            onClick={closeMobileMenu}
            className='nav-links-mobile'>
            
            </Link>
         </li>
    
      </nav>
      
    </>
  );
}

export default Navbar;
