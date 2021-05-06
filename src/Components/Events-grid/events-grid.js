import React from 'react'
import Event from '../Event/event';

const EventsGrid = ({ Event1, Event2 }) => {
    return (
        <div className="events-grid">
            <h1>Events</h1>
            <div className="events-container">
                <Event 
                    title="Singles Night"
                    description="We guarntee a 90% chance youre gonna get laid"
                    time="8:00 - 12:00"
                    month="Mar"
                    dotm="10"
                    url="https://images.unsplash.com/photo-1542326891-50b14105a80b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJhcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <Event 
                    title="Bar Olympics"
                    description="A great night of bar competions like pool, darts and more. Winner gets free drinks for a night"
                    time="9:00 - 2:00"
                    month="Apr"
                    dotm="7"
                    url="https://images.unsplash.com/photo-1488923566472-4b2d13a4af3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhciUyMGdhbWVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
            </div>
        </div>
    )
}
export default EventsGrid
