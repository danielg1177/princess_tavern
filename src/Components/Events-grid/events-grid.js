import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Event from '../Event/event';

const EventsGrid = () => {

    const [response, setResponse] = useState([])
        const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]

    useEffect(() => {
        axios.get("https://princestavernapi.herokuapp.com/events")
            .then(res => {
                let firstArr = res.data.events
                console.log(firstArr)
                let arr = []
                firstArr.forEach(obj => {
                    arr.push({
                        date: new Date(parseInt(`${obj.date[0]}${obj.date[1]}${obj.date[2]}${obj.date[3]}`), parseInt(`${obj.date[5]}${obj.date[6]}`), parseInt(`${obj.date[8]}${obj.date[9]}`), parseInt(`${obj.start_time[0]}${obj.start_time[1]}`), parseInt(`${obj.start_time[3]}${obj.start_time[4]}`)),
                        start_time: obj.start_time,
                        end_time: obj.end_time,
                        title: obj.title,
                        description: obj.description,
                        public: obj.public,
                        url: obj.url,
                        id: obj.id })
                })
                let sortedArr = arr.sort((obj1, obj2) => {
                    return obj1.date - obj2.date
                })
                sortedArr = sortedArr.slice(0,2)
                setResponse(sortedArr)
            })
        }, [])

    return (
        <div className="events-grid">
            <h1>Events</h1>
            <div className="events-container">
                {response.map(event => {
                    return (
                        <Event
                            title={event.title}
                            description={event.description}
                            time={`${event.start_time} - ${event.end_time}`}
                            month={months[(event.date.getMonth()) - 1]}
                            dotm={event.date.getDate()}
                            url={event.url}
                            id={event.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default EventsGrid
