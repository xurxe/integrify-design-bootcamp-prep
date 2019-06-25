import React from 'react';
import './styles.css';

import { StaticQuery, graphql } from 'gatsby';
import Parser from 'html-react-parser';
const Footer = ({ data }) => {

    const { contentfulFooter } = data;
    const { socialMediaTitle, socialMediaProfiles, mapTitle, mapImage, copyright, cities} = contentfulFooter;

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
                    <h4
                    className='Footer_subBox_title'
                    >
                        {socialMediaTitle}
                    </h4>

                    <div
                    className='Footer_subBox_content'
                    >
                        {socialMediaProfiles.map(profile => (
                            <a 
                            key={profile.id}
                            className='Footer_socialMediaIcon hvr-underline-out___footer'
                            href={profile.url}
                            aria-label={profile.name}>
                                {Parser(profile.iconFontAwesome)}
                            </a>
                        ))}
                    </div>
                </div>

                <div
                className='Footer_subBox Footer_subBox___map'
                >
                    <h4
                    className='Footer_subBox_title'>
                        {Parser(mapTitle.childMarkdownRemark.html)}
                    </h4>

                    <div
                    className='Footer_subBox_content'
                    >
                        <img
                        className='Footer_map'
                        src={`https:${mapImage.file.url}`}
                        alt='Map'
                        ></img>
                    </div>

                </div>
                
            </div>

            <div
            className='Footer_box Footer_box___bottom'
            >
                <div
                className='Footer_subBox Footer_subBox___copyrightAndCities'
                >
                    <p
                    className='Footer_copyright'>
                        {copyright} 2018&mdash;{currentYear}
                    </p>
                    <p
                    className='Footer_cities'>
                        {cities.map((city, index) => (
                            index !== 0 
                            ? ` / ${city}` 
                            : city
                        ))}
                    </p>
                </div>
            </div>
        </footer>
    )

    return jsx;
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Footer data={data} {...props}></Footer>}
    />
)

export const query = graphql`
{
	contentfulFooter {
        socialMediaTitle
        socialMediaProfiles {
            id
            name
            url
            iconFontAwesome
        }
        mapTitle {
            childMarkdownRemark {
                html
            }
        }
        mapImage {
            file {
                url
            }
            fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
            }
        }
        copyright
        cities
	}
}
`