import React from 'react'
import "./css/main.css"
import Home from '../home/Home';
import Skills from '../skills/Skills';

function Main() {
    return (
        <main className="content-app-main container">
            <Home/>
            <Skills/>
        </main>
    )
}

export default Main;