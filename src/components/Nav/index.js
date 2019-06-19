import React from 'react';
import './styles.css';

import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Nav = ({ data }) => {

    const { contentfulNavigationBar } = data;
    const { logoLeft, linksCenter, linkRight } = contentfulNavigationBar;

    const jsx = (
        <nav 
        className='Nav'
        >
            <div 
            className='Nav_box'
            >
                <button 
                className='Nav_button hvr-outline-out___nav'
                >
                    <Img
                    fluid={logoLeft.fluid}
                    ></Img>

                </button>
            </div>

            <div 
            className='Nav_box'
            >
                {linksCenter.map(link => (
                    <Link 
                    key={link.id}
                    className='Nav_link hvr-underline-out___nav' 
                    to={link.slug ? `/${link.slug}` : '/'}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
    
            <div 
            className='Nav_box'
            >
                <Link  
                className='Nav_link Nav_link___right hvr-underline-out___nav' 
                to={`/${linkRight.slug}`}
                >
                    {linkRight.name}
                </Link>
            </div>
        </nav>
    )

    return jsx;
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Nav data={data} {...props}></Nav>}
    />
)

export const query = graphql`
{
    contentfulNavigationBar {
        logoLeft {
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
        linksCenter {
            __typename
            ... on ContentfulIndex {
                id
                name
            }
            ... on ContentfulPage {
                id
                name
                slug
            }
        }
        linkRight {
            name
            slug
        }
    }
}
`
