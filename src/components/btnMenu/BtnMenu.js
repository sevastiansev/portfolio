import React from 'react'
import "./css/btn.css"

function BtnMenu() {
    function showMenu(){
        let lineTop = document.querySelector(".line-1");
        let lineCenter = document.querySelector(".line-2");
        let lineBtn = document.querySelector(".line-3");
        let headerMenu = document.querySelector(".header-nav-menu-app");
        let linksMenu = document.querySelectorAll(".link-item");

        lineTop.classList.toggle("active");
        lineCenter.classList.toggle("active");
        lineBtn.classList.toggle("active");
        headerMenu.classList.toggle("active");

        linksMenu.forEach((linkMenu)=>{
            linkMenu.addEventListener("click",showMenu);
        });
    }
    return (
        <div className="btn-menu" onClick={showMenu}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
        </div>
    )
}

export default BtnMenu;