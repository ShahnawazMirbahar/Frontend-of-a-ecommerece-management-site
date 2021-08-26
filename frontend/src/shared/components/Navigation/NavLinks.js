import React from 'react';
import './NavLinks.css'
import { NavLink } from 'react-router-dom';
const NavLinks = props =>{
    return <ul className="nav-links">
        <li>
            <NavLink to = "/" exact> All WareHouses</NavLink>
        </li>
        <li>
                <NavLink to ="/u1/warehouse">Your Products</NavLink>
        </li>
        <li>
                <NavLink to ="/warehouse/new">Add Products</NavLink>
        </li>
        <li>
                <NavLink to ="/auth">Authinticate</NavLink>
        </li>
    </ul>
};

export default NavLinks;