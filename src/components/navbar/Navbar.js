import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FONT_COLOR_BLUE } from '../../constants/color_constants';
import logo_aic from '../../images/AIC-logo.png'
import './Navbar.css'
import { dropdownRoutes } from '../../constants/route_constants';
const Navbar = () => {

  const [navBgColor, setNavBgColor] = useState('#ffffff30');
  const [navFontColor, setFontColor] = useState('white');
  const [dropdownColor, setDropdownColor] = useState('#0000009d')
  const handleScrollEvent = (e) => {
    if(e.target.documentElement.scrollTop>50 && navBgColor!=='white'){
      setNavBgColor('white');
      setFontColor(FONT_COLOR_BLUE);
      setDropdownColor('white');
    }
    else if(e.target.documentElement.scrollTop<=50 && navBgColor!=='#ffffff30'){
      setNavBgColor('#ffffff30');
      setFontColor('white');
      setDropdownColor('#0000009d');
    }
  }

  useEffect((e) => {
      window.addEventListener('scroll', handleScrollEvent)
      return ()=>{
        window.removeEventListener('scroll', handleScrollEvent)
      }
  },[navBgColor]);

  const RenderDropdown = ({dropdownRoutes}) => {
    console.log(dropdownRoutes)
    return(
      <div className={'dropdown_container'} style={{backgroundColor:dropdownColor}}>
        {dropdownRoutes.map((route, index)=>
          <li key={index}><Link to={route.path} style={{color: navFontColor}}>{route.name}</Link></li>
        )}
      </div>
    )
  }

  return (
    <nav style={{backgroundColor:navBgColor}} >
      <div className={'logo_container'}>
          <img alt='logo_aic' src={logo_aic}/>
          <h2 style={{color: navFontColor}}>AI CLUB</h2>
      </div>
      <div className={'list_container'}>
        <li>
          <Link style={{color: navFontColor}} to="/">Home</Link>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/about">About<i className="bi bi-caret-down-fill" style={{marginLeft:'2px', marginTop:'2px'}}/></Link>
          <RenderDropdown dropdownRoutes={dropdownRoutes.about}/>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/courses">Courses</Link>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/projects">Projects</Link>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/membership">Membership</Link>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/registeration">Registeration<i className="bi bi-caret-down-fill" style={{marginLeft:'2px', marginTop:'2px'}}/></Link>
          <RenderDropdown dropdownRoutes={dropdownRoutes.registration}/>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/user-account">My Account<i className="bi bi-caret-down-fill" style={{marginLeft:'2px', marginTop:'2px'}}/></Link>
          <RenderDropdown dropdownRoutes={dropdownRoutes.myAccount}/>
        </li>
        <li>
          <Link style={{color: navFontColor}} to="/contact_us">Contact us</Link>
        </li>
      </div>
      <form className={'search_form'}>
        <input></input>
        <button style={{color:navFontColor}}><i  class="bi bi-search"/></button>
      </form>
    </nav>
  )
}

export default Navbar