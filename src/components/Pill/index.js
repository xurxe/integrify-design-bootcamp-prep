import React from 'react';
import './styles.css';

import { Link } from 'gatsby';

const Pill = ({ pill }) => {

    const { text, path } = pill;
    
    const jsx = (
        <Link to={path}
        className='Pill'
        >
            {text}
        </Link>
    )

    return jsx;
}

export default Pill;