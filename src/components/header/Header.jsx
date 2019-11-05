import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <div className="navigation">
        <NavLink activeClassName='active' to='/'>
            Home
        </NavLink>
        <NavLink activeClassName='active' to='/another'>
            Another Page
        </NavLink>
    </div>
)

export default Header