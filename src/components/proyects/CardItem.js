import React from 'react'
import "./css/card.css";
import date from "./data/data.json";

function CardItem() {
    return(
        date.map((data)=>(
            <article className="card-component-proyect" key={data.id}>
                <div className="card-content-component">
                    <div className="card-image-component">
                        <img src={data.img} alt={data.alt} className="image"/>
                    </div>
                    <div className="card-body-component">
                        <div className="title-card-component">
                            <span className="title">{data.title}</span>
                        </div>
                        <div className="card-component-description">
                            <p className="description">{data.description}</p>
                        </div>
                        <div className="btn-repository">
                            <a href={data.repository} className="btn">repositorio</a>
                        </div>
                    </div>
                </div>
            </article>
        ))
    )
}
export default CardItem;