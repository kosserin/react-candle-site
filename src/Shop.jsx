import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function Shop({cards}) {


    return(
        <section id="shop" className="second-section">
            <h1>Here are some offers for you</h1>
            <div id="cards">{cards.map( card => (
                <div key={uuidv4()} className="card">
                    <img src={card.image} alt={card.alt} />
                    <div className="text-container">
                    <h2>{card.heading}</h2>
                    <p>{card.text}</p>
                    <a href={card.tag}>Shop Now</a>
                    </div>
                </div>
            ))}</div>
        </section>
    )
}

export default Shop;