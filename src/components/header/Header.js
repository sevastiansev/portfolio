import React from 'react';
import Logo from '../logo/Logo';
import MenuHeader from '../menu-header/MenuHeader';
import BtnMenu from '../btnMenu/BtnMenu'
import "./header.css";

function Header() {
    return (
        <header className="header-navegation-app">
            <nav className="header-nav-content-app container">
                <Logo/>
                <MenuHeader/>
                <BtnMenu/>
            </nav>
        </header>
    )
}

export default Header;