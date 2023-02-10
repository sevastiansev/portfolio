import React from 'react'
import "./css/menu.css"

function MenuHeader() {
    return (
        <div className="header-nav-menu-app">
            <ul className="list-items">
                <li className="item-list"><a href="#home" className="link-item">home</a></li>
                <li className="item-list"><a href="#about" className="link-item">about</a></li>
                <li className="item-list"><a href="#help" className="link-item">help</a></li>
                <li className="item-list"><a href="#more" className="link-item">more</a></li>
            </ul>
        </div>
    )
}

export default MenuHeader;