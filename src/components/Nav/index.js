import React from 'react';
import './styles.css';

import { Link } from 'gatsby';
import Data from '../../data';

const Nav = () => (
    <nav 
    className='Nav'
    >
        <div 
        className='Nav_box'
        >
            <button 
            className='Nav_logo hvr-outline-out'
            ></button>
        </div>

        <div 
        className='Nav_box'
        >
            {Data.nav.center.map(item => (
                <Link 
                key={item.id}
                className='Nav_link hvr-underline-out' 
                to={item.path}
                >
                    {item.name}
                </Link>
            ))}
        </div>

        <div 
        className='Nav_box'
        >
            <Link 
            className='Nav_link Nav_link___login hvr-underline-out' 
            to={Data.nav.right.path}
            >
                {Data.nav.right.name}
            </Link>
        </div>
    </nav>
)

export default Nav;
