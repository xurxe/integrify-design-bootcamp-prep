import React from 'react';
import './styles.css';

import { StaticQuery, graphql } from 'gatsby';
import Parser from 'html-react-parser';
import Img from 'gatsby-image';

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
                    className='Footer_socialMediaTitle'
                    >
                        {socialMediaTitle}
                    </h4>

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

                <div
                className='Footer_subBox Footer_subBox___map'
                >
                    <h4
                    className='Footer_mapTitle'>
                        {Parser(mapTitle.childMarkdownRemark.html)}
                    </h4>

                    <Img
                    fluid={mapImage.fluid}></Img>

                </div>
                
            </div>

            <div
            className='Footer_box Footer_box___bottom'
            >
                <div
                className='Footer_subBox Footer_subBox___copyrightAndCities'
                >
                    <p><b>
                        {copyright} 2018&mdash;{currentYear}
                    </b></p>
                    <p>
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
                id
                html
            }
        }
        mapImage {
            id
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