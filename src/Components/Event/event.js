import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Event = ({title, description, time, month, dotm, url}) => {
    return (
        <Link to="/scheduled-events" className='event-container' style={{backgroundImage: `url(${url})`}}>
            <div className="event-title">
                <h3>{title}</h3>
            </div>
            <div className="event-description">
                <p>{description}</p>
                <div className="event-time-container">
                    <p className="event-date">{`${month}. ${dotm}`}</p>
                    <p className="event-time">{time}</p>
                </div>
            </div>
        </Link>
    )
}

export default Event
