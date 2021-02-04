import React from 'react';
import {NavLink} from 'react-router-dom'


export const Navbar = () => (
    <nav className="navbar nav navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note App
        </div>
        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" exact>Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/about">О приложении</NavLink>
        </li>             
      </ul>

    </nav>
)