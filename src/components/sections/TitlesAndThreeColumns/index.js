import React from 'react';
import './styles.css';

import Parser from 'html-react-parser';

const TitlesAndThreeColumns = ({ section }) => {

    const { title, subtitle, column1, column2, column3} = section;
    
    const jsx = (
        <section
        className='titlesAndThreeColumns'>
            <h2
            className='titlesAndThreeColumns_title'
            >
                {title}
            </h2>

            <h3
            className='titlesAndThreeColumns_subtitle'
            >
                {Parser(subtitle)}
            </h3>

            <div
            className='titlesAndThreeColumns_columns'
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