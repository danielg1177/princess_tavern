import React, { useEffect } from 'react'
import SchedueledEventsEvent from '../schedueled-events-event/schedueled-events-event'

const SchedueledEventsGrid = () => {
    return (
        <div className="schedueled-events-grid">
            <h1>Schedueled Events</h1>
            <SchedueledEventsEvent url="https://images.unsplash.com/photo-1616189221668-386d14f76678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhciUyMHBhcnR5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" month="Dec" dotm="5" title="Girls Night" time="10:00 - 1:00" description="Girls get 50% off all drinks all night" />
            <SchedueledEventsEvent url="https://images.unsplash.com/photo-1542326891-50b14105a80b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJhcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" month="Mar" dotm="10" title="Singles Night" time="8:00 - 12:00" description="We guarntee a 90% chance youre gonna get laid"/>
            <SchedueledEventsEvent url="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" month="Jan" dotm="29" title="Trivia Night" time="7:00 - 10:00" description="A great way to spend your night and meet new people"/>
            <SchedueledEventsEvent url="https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" month="Feb" dotm="1" title="Couples Night" time="10:00 - 1:00" description="If youre not sad and alone it gets better, now you get 50% off drinks too"/>
            <SchedueledEventsEvent url="https://images.unsplash.com/photo-1488923566472-4b2d13a4af3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhciUyMGdhbWVzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" month="Apr" dotm="7" title="Bar Olympics" time="9:00 - 2:00" description="A great night of bar competions like pool, darts and more. Winner gets free drinks for a night"/>
        </div>
    )
}

export default SchedueledEventsGrid
