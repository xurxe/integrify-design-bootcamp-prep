import React from 'react';
import './styles.css';

import { StaticQuery, graphql } from 'gatsby';
import Parser from 'html-react-parser';
import Pill from '../../Pill';

const Events = ({ data, section }) => {
    
    const { title, subtitle } = section;
    const { allContentfulEvent } = data;
    
    const jsx = (
        <section
        className='Section Section___events'>
            <h3
            className='Section_title'
            >
                {title}
            </h3>

            {subtitle && <h4
            className='Section_subtitle'
            >
                {Parser(subtitle.childMarkdownRemark.html)}
            </h4>}

            <div
            className='Section_content Section_content___events'
            >
                <EventSearch></EventSearch>

                {allContentfulEvent.edges.map((event, index) => (
                    <Event 
                    key={event.node.id}
                    number={index + 1}
                    event={event.node}
                    ></Event>
                ))}
            </div>

        </section>
    )

    return jsx;
}

const EventSearch = () => {
    
    const jsx = (
        <form
        className='Event_form'>
            <fieldset
            className='Event_search'
            >
                <input 
                type='text'
                className='Event_searchBox hvr-hollow___searchBox'
                ></input>

                <button 
                type='submit'
                className='Event_searchButton hvr-hollow___searchButton'
                >
                    <i class="fas fa-search"></i>
                </button>
            </fieldset> 
        </form>
    )

    return jsx;
}


const Event = ({ number, event }) => {

    const { slug, dateAndTime, venue, city } = event;

    const pill = {
        text: 'Join!',
        to: {
            slug: `/events/${slug}`
        }
    }

    const date = new Date(dateAndTime);
    const day = `0${date.getDate()}`.substr(-2);
    const month = `0${1 + date.getMonth()}`.substr(-2);
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`
    
    const jsx = (
        <div
        className='Event'
        >
            <div
            className='Event_number'>
                {number}
            </div>

            <div
            className='Event_info'>

                <div
                className='Event_dateAndLocation'
                >
                    <time
                    className='Event_date'
                    >
                        {formattedDate}
                    </time>

                    <p
                    className='Event_location'
                    >
                        <strong>{venue}</strong>, {city}
                    </p>
                </div>

                <Pill
                from='events'
                pill={pill}
                ></Pill>
            </div>

        </div>
    )

    return jsx;
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Events data={data} {...props}></Events>}
    />
)

export const query = graphql`
{
    allContentfulEvent (sort: {fields: dateAndTime, order: ASC}) {
        edges {
            node {
                id
                slug
                dateAndTime
                venue
                city
            }
        }
    }
}
`