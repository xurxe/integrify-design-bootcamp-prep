import React from 'react';
import './styles.css';

import TitlesAndThreeColumns from '../sections/TitlesAndThreeColumns';
import Events from '../sections/Events';
import Members from '../sections/Members';

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

    else if (section.type === 'members') {
        jsx = (
            <Members
            section={section}
            ></Members>
        )
    }

    else {
        jsx = <p>Missing type</p>
    }

    return jsx;
}

export default Section;