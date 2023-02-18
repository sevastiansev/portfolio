import React from 'react'
import "./css/home.css"
import Image from "./img/front_techstack.svg";


function Home() {
    return (
        <section className="section-content-home-app" id='h'>
            <div className="grid-content-home">
                <div className="grid-content-1">
                    <div className="grid-content-image">
                        <img src={Image} alt="stack javascript" className='image' />
                    </div>
                </div>
                <div className="grid-content-2">
                    <div className="grid-content-text">
                        <div className="title-home">
                            <h1 className="title">
                                Hola mi nombre es <span className="name">sevastian</span>
                            </h1>
                        </div>
                        <div className="subtitle-home">
                            <h2 className="subtitle">
                                desarrollador web Front End
                            </h2>
                        </div>
                        <div className="content-btn">
                            <a href="#contact" className="btn-ct">contactame</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;