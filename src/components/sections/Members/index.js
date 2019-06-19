import React from 'react';
import './styles.css';

import Parser from 'html-react-parser';
import Img from 'gatsby-image';

const Members = ({ section }) => {

    const { title, subtitle, members} = section;
    
    const jsx = (
        <section
        className='Section Section___members'>
            <h2
            className='Section_title'
            >
                {title}
            </h2>

            {subtitle && <h3
            className='Section_subtitle'
            >
                {Parser(subtitle.childMarkdownRemark.html)}
            </h3>}

            <div
            className='Section_content Section_content___members'
            >
                {members && members.map(member => (
                    <Member
                    key={member.id}
                    member={member}
                    ></Member>
                ))}

            </div>
        </section>
    )

    return jsx;
}

const Member = ({ member }) => {

    const { name, position, company, image } = member;
    
    const jsx = (
        <div
        className='Member'
        >
            <Img
            fluid={image.fluid}
            className='Member_photo'
            ></Img>

            <div
            className='Member_text'>
                <p
                className='Member_name'>
                    {name}
                </p>
                
                <p
                className='Member_job'>
                    {position} / {company}
                </p>
            </div>
        </div>
    )

    return jsx;
}

export default Members;