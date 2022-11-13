import React, { useState, useEffect } from 'react';
import SchedueledEventsEvent from '../schedueled-events-event/schedueled-events-event';
import axios from 'axios';

const SchedueledEventsGrid = () => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    const [response, setResponse] = useState([])

    useEffect(() => {
            // axios.get("https://princestavernapi.netlify.app/events")
            //     .then(res => {
            //         let firstArr = res.data.events
            //         let arr = []
            //         firstArr.forEach(obj => {
            //             console.log(obj)
            //             arr.push({
            //                 date: new Date(parseInt(`${obj.date[0]}${obj.date[1]}${obj.date[2]}${obj.date[3]}`), parseInt(`${obj.date[5]}${obj.date[6]}`), parseInt(`${obj.date[8]}${obj.date[9]}`), parseInt(`${obj.start_time[0]}${obj.start_time[1]}`), parseInt(`${obj.start_time[3]}${obj.start_time[4]}`)),
            //                 start_time: obj.start_time,
            //                 end_time: obj.end_time,
            //                 title: obj.title,
            //                 description: obj.description,
            //                 public: obj.public,
            //                 url: obj.url,
            //                 id: obj.id })
            //             })
            //             let sortedArr = arr.sort((obj1, obj2) => {
            //                 return obj1.date - obj2.date
            //             })
            //             setResponse(sortedArr)
            //         })
            setResponse([{date: new Date(2020, 6, 8), title: "Singles Night", start_time: "8:00", end_time: "12:00", description: "We guarntee a 90% chance youre gonna get laid", public: true, url: "https://images.unsplash.com/flagged/photo-1574319523332-4cadaa531506?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhciUyMHBhcnR5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
            {date: new Date(2020, 2, 20), title:"Trivia Night", start_time:"7:00", end_time: "10:00", description:"A great way to spend your night and meet new people", public: true, url: "https://images.unsplash.com/photo-1570937943292-a574bd5bc722?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpdmlhfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
            {date: new Date(2020, 4, 1), title: "Couples Night", start_time: "10:00", end_time: "1:00", description: "If youre not sad and alone it gets better, now you get 50% off drinks too", public: true, url: "https://images.unsplash.com/photo-1542326891-50b14105a80b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdXBsZSUyMGJhcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
            {date: new Date(2020, 11, 11), title:"Bar Olympics", start_time:"9:00", end_time: "2:00", description:"A great night of bar competions like pool, darts and more. Winner gets free drinks for a night", public: true, url: "https://images.unsplash.com/photo-1566214999850-1698983935f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyJTIwZ2FtZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}
            ])
            }, [])

    return (
        <div className="schedueled-events-grid">
            <h1>Schedueled Events</h1>
            {response.map(event => {
                    return (
                        <SchedueledEventsEvent
                            title={event.title}
                            id={event.id}
                            description={event.description}
                            time={`${event.start_time} - ${event.end_time}`}
                            month={months[(event.date.getMonth()) - 1]}
                            dotm={event.date.getDate()}
                            url={event.url}
                            key={event.id}
                        />
                    )
                })}
        </div>
    )
}

export default SchedueledEventsGrid
