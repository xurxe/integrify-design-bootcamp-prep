import React from 'react';
import './styles.css';

import TitlesAndThreeColumns from '../sections/TitlesAndThreeColumns';
import TitleAndLogos from '../sections/TitleAndLogos';
import Events from '../sections/Events';
import Members from '../sections/Members';

const Main = ({ main }) => {
    
    const jsx = (
        <main
        className='Main'
        >
            {main.map(section => (
                <Section 
                key={section.id}
                section={section}
                ></Section>
            ))}
        </main>
    )

    return jsx;
}

const Section = ({ section }) => {

    const { __typename } = section;
    let jsx;
    
    if (__typename === 'ContentfulTitlesAndThreeColumns') {
        jsx = (
            <TitlesAndThreeColumns
            section={section}
            ></TitlesAndThreeColumns>
        )
    }

    else if (__typename === 'ContentfulTitleAndLogos') {
        jsx = (
            <TitleAndLogos
            section={section}
            ></TitleAndLogos>
        )
    }

    else if (__typename === 'ContentfulEvents') {
        jsx = (
            <Events
            section={section}
            ></Events>
        )
    }

    else if (__typename === 'ContentfulMembers') {
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

export default Main;