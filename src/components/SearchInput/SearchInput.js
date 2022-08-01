import React, {useState} from 'react'

export default function SearchInput({events}) {    
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
        <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label>
                    </div>
                    <ul className="card-grid">
                    {search(events).map((event) => (
                            <li key={event.id}>
                                <article className="card" key={event.id}>
                                    <div className="card-content">
                                      <h2 className="card-name">{event.title}</h2>  
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
    )
}
   
    