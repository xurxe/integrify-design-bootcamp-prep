import React from 'react';
import './styles.css';

import Section from '../Section';

const Main = ({ main }) => {
    
    const jsx = (
        <main>
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

export default Main;