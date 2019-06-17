import React from 'react';
import './styles.css';

import Parser from 'html-react-parser';

const TitlesAndThreeColumns = ({ section }) => {

    const { title, subtitle, column1, column2, column3} = section;
    
    const jsx = (
        <section
        className='Section Section___titlesAndThreeColumns'>
            <h2
            className='Section_title'
            >
                {title}
            </h2>

            {subtitle && <h3
            className='Section_subtitle'
            >
                {Parser(subtitle)}
            </h3>}

            <div
            className='Section_content Section_content___titlesAndThreeColumns'
            >
                <p>{Parser(column1)}</p>
                <p>{Parser(column2)}</p>
                <p>{Parser(column3)}</p>
            </div>
        </section>
    )

    return jsx;
}

export default TitlesAndThreeColumns;