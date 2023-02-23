import React from 'react'
import "./css/card.css";
import data from "./data/data.json";

function CardItem() {
    return (
            data.map((item)=>{
                return(
                <div className="card-item-proyect" key={item.id}>
                    <div className="card-content-item">
                        <div className="card-content-top">
                            <div className="card-content-img">
                                <img src={item.img} alt={item.alt} />
                            </div>
                        </div>
                        <div className="card-content-body">
                            <div className="content-card-header-body">
                                <div className="content-card-info">
                                    <div className="card-title-content">
                                        <span className="title">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
    )
}
export default CardItem;