import React from 'react'
import "./css/home.css"

function Home() {
    return (
        <section className="section-home-content">
            <div className="content-home-page container">
                <div className="text-content-home">
                    <div className="title-home">
                        <h1 className="title">Hola mi nombre es <span className="name">sevastian</span></h1>
                    </div>
                    <div className="subtitle-home">
                        <h2 className="subtitle">desarrollador web frontend...</h2>
                    </div>
                    <div className="btn-ct">
                        <a href="#contact" className="btn">contactame</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;