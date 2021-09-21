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
            < Link id='link' to='/react-candle-site/'>
            <h1>Koss</h1></Link>
            <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
                < Link id='link' to='/react-candle-site/products'>
                <li><a href="#">Products</a></li>
                </Link>
                < Link id='link' to='/react-candle-site/about-page' >
                <li><a href="#">About</a></li>
                </Link>
                < Link id='link' to='/react-candle-site/contact'>
                <li><a href="#">Contact</a></li>
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