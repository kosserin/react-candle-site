import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Navbar({handleOnScroll,offset}) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        handleOnScroll()
    }, []);

    function handleBurgerClick() {
        setToggle(!toggle);
    }

    return(
        <nav className={offset > 0 ? 'scrolled-nav' : ''}>
            < Link id='xd' to='/'>
            <h1>Koss</h1></Link>
            <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
                < Link id='xd' to='/products'>
                <li><a href="#">Products</a></li>
                </Link>
                < Link id='xd' to='/aboutPage' >
                <li><a href="#">About</a></li>
                </Link>
                < Link id='xd' to='/contact'>
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