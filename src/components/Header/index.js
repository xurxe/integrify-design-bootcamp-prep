import React from 'react';
import './styles.css';

const Header = ({ header }) => {

    const {title, subtitle, image} = header;

    const jsx = (
        <div
        className='Header'
        >

            <div
            className='Header_div Header_div___text'
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
            className='Header_div Header_div___image'
            ></div>
        </div>

    )

    return jsx;
}
export default Header;