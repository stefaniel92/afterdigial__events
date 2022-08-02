
import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';

function App() {
  const [events, setEvents] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://t-bridge.s3.eu-west-1.amazonaws.com/events.json')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setEvents(res.data.data.getEvents.map(events => events))
    })
  }, [currentPageUrl])

  if (loading) return (
    <p className="eventListing__loading">Loading...</p>
  )

  return (
    <div className="eventListing">
      <div className="eventListing__container">
        <Search events={events} />
      </div>
    </div>
  );
}

export default App;
