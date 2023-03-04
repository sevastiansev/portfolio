import React from 'react'
import "./css/main.css"
import Home from '../home/Home';
import Proyects from '../proyects/Proyects';
import Contact from '../contact/Contact';

function Main() {
    return (
        <main className="content-app-main">
            <Home/>
            <Proyects/>
            <Contact/>
        </main>
    )
}

export default Main;