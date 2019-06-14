import React from 'react';
import './styles.css';

import Image from 'gatsby-image';

const Header = ({ header }) => {

    const {title, subtitle, image} = header;

    const jsx = (
        <div
        className='Header'
        >

            <div
            className='Header_box Header_box___text'
            >
                {title && 
                <h1
                className='Header_title'
                >
                    {title}
                </h1>
                }

                {subtitle && 
                <h2
                className='Header_subtitle'
                >
                    {subtitle}
                </h2>
                }
            </div>

            <div
            className='Header_box Header_box___image'
            >
                {image && 
                <Image
                fluid={image.fluid}
                ></Image>}

            </div>
        </div>

    )

    return jsx;
}
export default Header;