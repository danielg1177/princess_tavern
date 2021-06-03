import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import SchedueledEventsGrid from '../Components/schedueled-events-grid/schedueled-events-grid';

const SchedueledEvents = ({ loggedInStatus, handleLogout }) => {
    return (
        <div>
            <Navbar active="scheduled-events" loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <SchedueledEventsGrid />
        </div>
    )
}

export default SchedueledEvents
