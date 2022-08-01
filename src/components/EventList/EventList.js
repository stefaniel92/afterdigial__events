import React from 'react'
import './EventList.css'


export default function EventList({ events }) {  return (
    <>
      {events.map(event => (
        <div key={event.title} className="eventListing__card">
          <h3>{event.title}</h3>
        </div>
      ))}
    </>
  )
}