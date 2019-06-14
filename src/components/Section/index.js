import React from 'react';
import './styles.css';

import TitlesAndThreeColumns from '../sections/TitlesAndThreeColumns';

const Section = ({ section }) => {
    let jsx;
    
    if (section.type === 'titlesAndThreeColumns') {
        jsx = (
            <TitlesAndThreeColumns
            section={section}
            ></TitlesAndThreeColumns>
        )
    }

    else {
        jsx = <p>Missing type</p>
    }

    return jsx;
}

export default Section;