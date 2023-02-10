import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

// BEM Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='neuro__navbar'>
    <div className='neuro__navbar__links'>
      <div className='neuro__navbar-links-logo'>
      </div>
      <div className='neuro__navbar__links_container'>
      <p><a href="#home">Home</a></p>
        <p><a href="#neurodiversity">What is Neurodiveristy?</a></p>
        <p><a href="#possibilities">Possibilities</a></p>
        <p><a href="#features">Advantages</a></p>
        <p><a href="#blog">Blog Posts</a></p>
      </div>
    </div>
    <div className='neuro__navbar-sign'><p>Sign In</p>
    <button type="button">Sign Up</button></div>

    <div className='neuro__navbar-menu'>
    {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className='neuro__navbar-menu_container scale-up-center'>
          <div className='neuro__navbar-menu_container-links'>
          <p><a href="#home">Home</a></p>
        <p><a href="#neurodiversity">What is Neurodiveristy?</a></p>
        <p><a href="#possibilities">Possibilities</a></p>
        <p><a href="#features">Advantages</a></p>
        <p><a href="#blog">Blog Posts</a></p>
          <div className='neuro__navbar-menu_container-links-sign'><p>Sign In</p>
          <button type="button">Sign Up</button></div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Navbar