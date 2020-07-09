import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='/contact'>Contact</NavLink></li>
        </ul>
    )
}

export default Navbar;