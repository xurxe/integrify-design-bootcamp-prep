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
                {Parser(subtitle.childMarkdownRemark.html)}
            </h3>}

            <div
            className='Section_content Section_content___titlesAndThreeColumns'
            >
                <map>{Parser(column1.childMarkdownRemark.html)}</map>
                <map>{Parser(column2.childMarkdownRemark.html)}</map>
                <map>{Parser(column3.childMarkdownRemark.html)}</map>
            </div>
        </section>
    )

    return jsx;
}

export default TitlesAndThreeColumns;