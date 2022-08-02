import React from 'react'
import HTMLReactParser from 'html-react-parser';

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
        console.log(event.images.small);
        if(event.images.medium !== '') {
            eventImage = event.images.small;
        } else {
            eventImage = null;
        }
    }
  return (
    <li key={event.id}>
        <article className="eventListing__card" key={event.id}>
            <div className="eventListing__card-content">
                <div className="eventListing__image-wrapper">
                    {eventImage && <img className='eventListing__image' src={eventImage} alt='' contentType='text/html' />}
                </div>
                <h2 className="eventListing__card-title">{event.title}</h2>
                <p className="eventListing__card-date">{firstEventDate && firstEventDate} {lastEventDate !== firstEventDate && ' - ' + lastEventDate}</p> 
                {event.short_description !== '' && <p>{parse(event.short_description)}</p>} 
            </div>
        </article>
    </li>
  )
}
