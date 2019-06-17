import React from 'react';
import './styles.css';

import TitlesAndThreeColumns from '../sections/TitlesAndThreeColumns';
import Events from '../sections/Events';

const Section = ({ section }) => {
    let jsx;
    
    if (section.type === 'titlesAndThreeColumns') {
        jsx = (
            <TitlesAndThreeColumns
            section={section}
            ></TitlesAndThreeColumns>
        )
    }

    else if (section.type === 'events') {
        jsx = (
            <Events
            section={section}
            ></Events>
        )
    }

    else {
        jsx = <p>Missing type</p>
    }

    return jsx;
}

export default Section;