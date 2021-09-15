import React, { useState } from "react";

function Footer({focus, setFocus}) {

    return(
        <footer>
            <div className="left-side-container">
            <h1>Koss</h1>
            <h2>Candles for all nights</h2>
            <p>Petra Kočića 5, 13000</p>
            <p>Despotovac, Srbija</p>
            </div>
            <ul>Navigation
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            <div className="right-side-container">
            <h2>Join our newsletter</h2>
            <form>
            <p className={ focus ? 'change-on-focus' : '' }>Enter your email here</p>
            <input onFocus={() => setFocus(true)} type="email" name="email" id="email" />
            <button type="submit">Subscribe</button>
            </form>
            <div className="social-container">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
            </div>
            </div>
        </footer>
    )
}

export default Footer;