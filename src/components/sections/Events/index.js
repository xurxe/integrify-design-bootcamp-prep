import React from 'react';
import './styles.css';

import Parser from 'html-react-parser';
import Pill from '../../Pill';

const Events = ({ section }) => {
    
    const { title, subtitle, events} = section;
    
    const jsx = (
        <section
        className='Section Section___events'>
            <h2
            className='Section_title'
            >
                {title}
            </h2>

            {subtitle && <h3
            className='Section_subtitle'
            >
                {Parser(subtitle)}
            </h3>}

            {events && events.map((event, index) => (
                <Event 
                key={event.id}
                number={index + 1}
                event={event}
                ></Event>
            ))}

        </section>
    )

    return jsx;
}

const Event = ({ number, event }) => {

    const { dateTime, venue, city, pill} = event;

    const date = new Date(dateTime);
    const day = `0${date.getDate()}`.substr(-2);
    const month = `0${1 + date.getMonth()}`.substr(-2);
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`
    
    const jsx = (
        <div
        className='Event'
        >
            <div
            className='Event_info'>
                <div
                className='Event_number'>
                    {number}
                </div>

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
            </div>

            <Pill
            pill={pill}
            ></Pill>

        </div>
    )

    return jsx;
}

export default Events;