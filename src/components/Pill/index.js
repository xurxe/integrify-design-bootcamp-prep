import React from 'react';
import './styles.css';

import { Link } from 'gatsby';

const Pill = ({ pill }) => {

    const { text, to } = pill;
    
    const jsx = (
        <Link to={to.slug}
        className='Pill hvr-hollow '
        >
            {text}
        </Link>
    )

    return jsx;
}

export default Pill;