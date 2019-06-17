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
            className='Nav_logo hvr-outline-out___nav'
            ></button>
        </div>

        <div 
        className='Nav_box'
        >
            {Data.nav.center.map(item => (
                <Link 
                key={item.id}
                className='Nav_link hvr-underline-out___nav' 
                to={`/${item.slug}`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
 
        <div 
        className='Nav_box'
        >
            <Link  
            className='Nav_link Nav_link___login hvr-underline-out___nav' 
            to={`/${Data.nav.right.slug}`}
            >
                {Data.nav.right.name}
            </Link>
        </div>
    </nav>
)

export default Nav;
