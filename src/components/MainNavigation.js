import React from 'react'
import {NavLink} from 'react-router-dom'
import '../assets/MainNavigation.css'
const mainNavigation = props => (
     <header className="main-navigation">
         <div className="main-navigation__logo">
             <h1> Main menu </h1>
         </div>
         <nav className="main-navigation__items">
          <ul>
              <li><NavLink to="/user"> User</NavLink></li>
              <li><NavLink to="/question"> Question</NavLink></li>
              <li><NavLink to="/robot"> Robot</NavLink></li>
          </ul>
         </nav>
     </header>
)

export default mainNavigation;

//<li><NavLink to="/review">Review</NavLink></li>