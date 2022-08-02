import React, {useState} from 'react'
import EventCard from '../EventCard/EventCard'
import './Search.css'

export default function Search({events}) {    
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title"]);

    function search(events) {
        return events.filter((event) => {
            return searchParam.some((newEvent) => {
                return (
                    event[newEvent]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <>
        <div className="eventListing__search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="eventListing__search-input"
                    placeholder="Search for an event"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </label>
        </div>
        <ul className="eventListing__card-grid">
            {search(events).map((event) => (
                <EventCard event={event} key={event.id} />
            ))}
        </ul>
        </>
    )
}
   
    