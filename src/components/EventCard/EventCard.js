import React from 'react'
import HTMLReactParser from 'html-react-parser'
import Button from '../Button/Button'
import './EventCard.css';

export default function EventCard({event}) {
    const parse = HTMLReactParser;
    let firstEventDate = '';
    let lastEventDate = '';
    let eventImage = '';
    {
        if(event.first_date !== '') {
            const d = new Date(event.first_date);
            const firstMonth = d.toLocaleString('default', { month: 'short' });
            const firstDay = d.toLocaleString('default', { weekday: 'short' });
            const firstDate = d.getDate();
            const firstYear = d.getFullYear();

            firstEventDate = `${firstDay} ${firstMonth} ${firstDate} ${firstYear}`;
        }

        if(event.last_date !== '') {
            const d = new Date(event.last_date);
            const lastMonth = d.toLocaleString('default', { month: 'short' });
            const lastDay = d.toLocaleString('default', { weekday: 'short' });
            const lastDate = d.getDate();
            const lastYear = d.getFullYear();

            lastEventDate = `${lastDay} ${lastMonth} ${lastDate} ${lastYear}`;
        }

        if(event.images.small !== '') {
            eventImage = event.images.small;
        } else if(event.images.original !== '') {
            eventImage = event.images.original;
        } else {
            eventImage = null;
        }
    }
  return (
    <li key={event.id} className='eventListing__card'>
        <article>
            <div className="eventListing__image-wrapper">
                {eventImage && <img className='eventListing__image' src={eventImage} alt='' contentType='text/html' />}
            </div>
            <div className="eventListing__card-content">
                <div className="eventListing__card-content-top">
                    <h2 className="eventListing__card-title">{event.title}</h2>
                    <p className="eventListing__card-date">{firstEventDate && firstEventDate} {lastEventDate !== firstEventDate && ' - ' + lastEventDate}</p> 
                    {event.short_description !== '' && <p>{parse(event.short_description)}</p>}
                </div>
                <Button text='Book now' link='#' />
            </div>
        </article>
    </li>
  )
}
