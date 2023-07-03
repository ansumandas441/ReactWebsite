import React, { Fragment, useState } from 'react'
import { faBars, faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isCrazySpin, setCrazySpin] = useState(false);
  const [isIconClickable, setIconClickable] = useState(true);
  const [isLarge, setIsLarge] = useState(false);
  const handleClick = () => setClick(!click)
  const handleLogoClick = () => {
    if (!isIconClickable) {
      return; // Exit early if the icon is not clickable
    }
    setIconClickable(false)
    setIsSpinning(true)
    setIsLarge(true)
    setCrazySpin(true)
    setTimeout(() => {
      setIsLarge(false);
      setTimeout(() => {
        setCrazySpin(false)
        setTimeout(() => {
          setIsSpinning(false);
          setTimeout(() =>{
            setIconClickable(true)
          },200 )
        }, 250);
      }, 250); // Delay after returning to original size
    }, 500); // Delay for the enlarged size
  }
  return (
    <Fragment>
      <div id='wrapper'>
        <header id='header'>
          <div className={`logo${isLarge ? '-large' : ''}`} onClick={handleLogoClick}>
            <FontAwesomeIcon id={isLarge ? 'icon-large' : 'icon-medium'} icon={faGear} spin={isSpinning} className={isCrazySpin ? 'crazy-spin' : ''} />
          </div>
          <div class="content">
            <div class="inner">
              <h1>Ansuman Das</h1>
              <p>A DATA SCIENCE AND PHYSICS ENTHUSIAST<br />
                STUDENT | AUTHOR | PROGRAMMER.</p>
            </div>
          </div>
          <nav className='navbar'>
            {/* <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    KING ENGINE <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? faTimes : faBars} style={{ fontSize: '20px' }}/>
                </div>

            </div> */}
            <ul>
              <li onClick={handleLogoClick}><Link to='/Home' className='nav-links'>Home</Link></li>
              <li onClick={handleLogoClick}><Link to='/Blog' className='nav-links'>Blog</Link></li>
              <li onClick={handleLogoClick}><Link to='/About' className='nav-links'>About</Link></li>
              <li onClick={handleLogoClick}><Link to='/Resume' className='nav-links'>Resume</Link></li>
              <li onClick={handleLogoClick}><Link to='/Events' className='nav-links'>Events</Link></li>
              <li onClick={handleLogoClick}><Link to='/Research' className='nav-links'>Research</Link></li>
              <li onClick={handleLogoClick}><Link to='/Play' className='nav-links'>Play</Link></li>

            </ul>
          </nav>
        </header>
        <div>
          Middle element
        </div>
        <footer>
          Lowest element
        </footer>
      </div>
    </Fragment>
  )
}
