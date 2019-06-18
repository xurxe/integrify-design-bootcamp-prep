import React from 'react';
import './styles.css';

import { Link } from 'gatsby';

const Pill = ({ pill }) => {

    const { text, to } = pill;
    
    const jsx = (
        <Link to={to.slug}
        className='Pill'
        >
            {text}
        </Link>
    )

    return jsx;
}

export default Pill;