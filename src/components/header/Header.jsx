import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <div className="navigation">
        <NavLink activeClassName='active' to='/cart'>
            Cart
        </NavLink>
        <NavLink activeClassName='active' to='/logout'>
            Logout
        </NavLink>

        <NavLink activeClassName='active' to='/sign-up'>
            Sign Up
        </NavLink>
        <NavLink activeClassName='active' to='/login'>
            Login
        </NavLink>
    </div>
)

export default Header