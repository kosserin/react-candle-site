import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
            < Link id='footer-products-link' className='link' to='/react-candle-site/products'>
                <a id='footer-products-tag' className='footer-tag' href="#">Products</a>
                </Link>
                < Link id='footer-about-link' className='link' to='/react-candle-site/about-page' >
                <a id='footer-about-tag' className='footer-tag' href="#">About</a>
                </Link>
                < Link id='footer-contact-link' className='link' to='/react-candle-site/contact'>
                <a id='footer-contact-tag' className='footer-tag' href="#">Contact</a>
                </Link>
            </ul>
            <div className="right-side-container">
            <h2>Join our newsletter</h2>
            <form>
            <p className={ focus ? 'change-on-focus' : '' }>Enter your email here</p>
            <input onFocus={() => setFocus(true)} type="email" name="email" id="email" />
            <button id='subscribe-button' type="submit">Subscribe</button>
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