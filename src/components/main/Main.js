import React from 'react'
import "./css/main.css"
import Home from '../home/Home';
import Proyects from '../proyects/Proyects';

function Main() {
    return (
        <main className="content-app-main container">
            <Home/>
            <Proyects/>
        </main>
    )
}

export default Main;