import React, { useState, useEffect } from 'react';
import SchedueledEventsEvent from '../schedueled-events-event/schedueled-events-event';
import axios from 'axios';

const SchedueledEventsGrid = () => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", 
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    const [response, setResponse] = useState([])

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    useEffect(() => {
            axios.get("http://localhost:3002/events")
                .then(res => {
                    let firstArr = res.data.events
                    let arr = []
                    firstArr.forEach(obj => {
                        console.log(obj)
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
                        setResponse(sortedArr)
                    })
            }, [])

    return (
        <div className="schedueled-events-grid">
            <h1>Schedueled Events</h1>
            {response.map(event => {
                    return (
                        <SchedueledEventsEvent
                            title={event.title}
                            description={event.description}
                            time={`${event.start_time} - ${event.end_time}`}
                            month={months[(event.date.getMonth()) - 1]}
                            dotm={event.date.getDate()}
                            url={event.url}
                        />
                    )
                })}
        </div>
    )
}

export default SchedueledEventsGrid
