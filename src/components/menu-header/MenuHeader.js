import React from 'react'
import "./css/menu.css"

function MenuHeader() {
    return (
        <div className="header-nav-menu-app">
            <ul className="list-items">
                <li className="item-list"><a href="#h" className="link-item active">inicio</a></li>
                <li className="item-list"><a href="#skills" className="link-item">habilidades</a></li>
                <li className="item-list"><a href="#proyects" className="link-item">proyectos</a></li>
                <li className="item-list"><a href="#contact" className="link-item">contactame</a></li>
            </ul>
        </div>
    )
}

export default MenuHeader;