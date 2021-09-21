import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Navbar({handleOnScroll,offset, toggle, setToggle}) {

    useEffect(() => {
        handleOnScroll()
    }, []);

    function handleBurgerClick() {
        setToggle(!toggle);
    }

    return(
        <nav className={offset > 0 ? 'scrolled-nav' : ''}>
            < Link id='home-link' className='link' to='/react-candle-site/'>
            <h1>Koss</h1></Link>
            <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
                < Link id='products-link' className='link' to='/react-candle-site/products'>
                <a href="#">Products</a>
                </Link>
                < Link id='about-link' className='link' to='/react-candle-site/about-page' >
                <a href="#">About</a>
                </Link>
                < Link id='contact-link' className='link' to='/react-candle-site/contact'>
                <a href="#">Contact</a>
                </Link>
            </ul>
            <div className={toggle ? "burger toggle" : "burger"} onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;