import React from "react";
import "./cards.css";

function Cards({ cards }) {
    return (
        <div>
            {cards.map((card, index) => {
                return (
                    <img className="card" key={index} src={card} alt="card" />
                );
            })}
        </div>
    );
}

export default Cards;