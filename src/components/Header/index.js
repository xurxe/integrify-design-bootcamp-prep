import React from 'react';
import './styles.css';

import Image from 'gatsby-image';
import Pill from '../Pill';

const Header = ({ header }) => {

    const {title, subtitle, pill, image} = header;

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

                {pill && 
                <Pill
                pill={pill}
                ></Pill>}
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