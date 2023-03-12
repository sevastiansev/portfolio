import React from 'react'
import "./css/proyects.css"
import CardItem from './CardItem';

function Proyects() {
    return (
        <section className="section-content-proyects container" id='proyects'>
            <div className="section-title">
                <h4 className="title">proyectos</h4>
            </div>
            <div className="grid-content-card-proyects"> 
                <CardItem/>
            </div>
        </section>
    )
}

export default Proyects;