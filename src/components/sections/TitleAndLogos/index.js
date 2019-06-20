import React from 'react';
import './styles.css';

const TitleAndLogos = ({ section }) => {
    
    const { title, logos } = section;
    
    const jsx = (
        <section
        className='Section Section___titleAndLogos'>
            <h2
            className='Section_title Section_title___titleAndLogos'
            >
                {title}
            </h2>

            <div
            className='Section_content Section_content___titleAndLogos'
            >

                {logos.map(logo =>                         
                    <img
                    className='CompanyLogo'
                    src={`https:${logo.logo.file.url}`}
                    alt='Map'
                    ></img>)
                }

            </div>
        </section>
    )

    return jsx;
}

export default TitleAndLogos;