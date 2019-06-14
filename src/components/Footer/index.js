import React from 'react';
import './styles.css';

import Data from '../../data';
import Parser from 'html-react-parser';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    
    const jsx = (
        <footer
        className='Footer'
        >
            <div
            className='Footer_box Footer_box___top'
            >
                <div
                className='Footer_subBox Footer_subBox___socialMedia'
                >
                    <h3
                    className='Footer_socialMediaTitle'
                    >
                        {Data.footer.socialMedia.title}
                    </h3>

                    {Data.footer.socialMedia.links.map(item => (
                        <a 
                        key={item.id}
                        className='Footer_socialMediaIcon'
                        href={item.href}
                        aria-label={item.name}>
                            {Parser(item.icon)}
                        </a>
                    ))}
                </div>

                <div
                className='Footer_subBox Footer_subBox___map'
                >
                    <h3
                    className='Footer_mapTitle'>
                        <strong className='Footer_strong'>Think Tank United</strong> is currently connecting <em className='Footer_em'>287</em> minds from <em className='Footer_em'>19</em> different countries.
                    </h3>

                </div>
                
            </div>

            <div
            className='Footer_box Footer_box___bottom'
            >
                <div
                className='Footer_subBox Footer_subBox___copyrightAndCities'
                >
                    <p><b>
                        {Data.footer.copyrightAndCities.copyright} &copy; 2018&mdash;{currentYear}
                    </b></p>
                    <p>
                        {Data.footer.copyrightAndCities.cities.map((city, index) => (
                            index !== 0 
                            ? ` | ${city}` 
                            : city
                        ))}
                    </p>
                </div>
            </div>
        </footer>
    )

    return jsx;
}

export default Footer;