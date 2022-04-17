import React from 'react'
import { Link } from 'react-router-dom';
import logo_aic from '../../images/AIC-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className={'logo_container'}>
          <img alt='logo_aic' src={logo_aic}/>
          <h2>AI CLUB</h2>
      </div>
      <div className={'list_container'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <Link to="/registeration">Registeration</Link>
        </li>
        <li>
          <Link to="/contact_us">Contact us</Link>
        </li>
      </div>
      <form className={'search_form'}>
        <input></input>
        <button><i class="bi bi-search"/></button>
      </form>
    </nav>
  )
}

export default Navbar;