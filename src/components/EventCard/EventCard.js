import React from 'react'

export default function EventCard({event}) {
    let firstEventDate = '';
    let lastEventDate = '';
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
    }
  return (
    <li key={event.id}>
        <article className="card" key={event.id}>
            <div className="card-content">
                <h2 className="card-name">{event.title}</h2>
                <p>{firstEventDate && firstEventDate} {lastEventDate != firstEventDate && ' - ' + lastEventDate}</p>  
            </div>
        </article>
    </li>
  )
}
