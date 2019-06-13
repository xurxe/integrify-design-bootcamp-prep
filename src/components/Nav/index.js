import React from "react";
import "./styles.css";

import { Link } from "gatsby";

const Nav = () => (
    <nav className='Nav'>
        <div className='Nav_div'>
            <button className='Nav_logo hvr-outline-out'></button>
        </div>

        <div className='Nav_div'>
            <Link className='Nav_link hvr-underline-out' to='/'>
                Home
            </Link>

            <Link className='Nav_link hvr-underline-out' to='/about'>
                About
            </Link>

            <Link className='Nav_link hvr-underline-out' to='/events'>
                Events
            </Link>

            <Link className='Nav_link hvr-underline-out' to='/join'>
                Join us!
            </Link>
        </div>

        <div className='Nav_div'>
            <Link className='Nav_link hvr-underline-out Nav_link___login' to='/login'>
                Log in
            </Link>
        </div>
    </nav>
)

export default Nav;
