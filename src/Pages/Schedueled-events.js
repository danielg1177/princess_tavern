import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import SchedueledEventsGrid from '../Components/schedueled-events-grid/schedueled-events-grid';

const SchedueledEvents = () => {
    return (
        <div>
            <Navbar active="scheduled-events"/>
            <SchedueledEventsGrid />
        </div>
    )
}

export default SchedueledEvents
