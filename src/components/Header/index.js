import React from 'react';
import './styles.css';

import Pill from '../Pill';

const Header = ({ header }) => {

    const {title, subtitle, pill, image, alt} = header;

    const jsx = (
        <header
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
                from='header'
                pill={pill}
                ></Pill>}
            </div>

            <div
            className='Header_box Header_box___image'
            > 
                {image && 
                <img
                className='Header_image'
                src={`https:${image.file.url}`}
                alt={alt}
                ></img>} 

            </div>
        </header>

    )

    return jsx;
}
export default Header;