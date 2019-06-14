import React from 'react';
import './styles.css';

import Image from 'gatsby-image';
import Parser from 'html-react-parser';

const Header = ({ header }) => {

    const {title, image} = header;

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
                    {Parser(title)}
                </h1>
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