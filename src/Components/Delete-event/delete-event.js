import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

const DeleteEvent = () => {

    const [response, setResponse] = useState([])

    useEffect(() => {
        axios.get("https://princestavernapi.netlify.app/events")
            .then(res => {
                let arr = res.data.events
                setResponse(arr)
            })
        }, [])

    const handleDelete = (id) => {
        axios.delete(`https://princestavernapi.netlify.app/events/${id}`,
        { withCredentials: true })
        .then(response => {
            console.log("event delete response", response)
        }).catch(error => {
            console.log("event delete error", error)
        })
        setResponse(response.filter(event => {
            return event.id !== id
        }))
    }

    return (

        <Accordion>
            <React.Fragment>
                {/* <a className="scehdueled-event-dropdown-a" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> */}
                <Accordion.Toggle variant="link" eventKey="2" className="admin-acord">
                    <div className="new-event-drop">
                        <h2>Delete an event</h2>
                    </div>
                </Accordion.Toggle>
                {/* </a> */}
                {/* <div class="collapse" id="collapseExample"> */}
                <Accordion.Collapse eventKey="2" className="acord">
                    <div>
                        {response.map(event => {
                            return (
                                <div className="delete-card d-flex justify-content-between" key={event.id}>
                                    <div className="delete-left">{event.title}</div>
                                    <div className="delete-right" onClick={() => handleDelete(event.id)}><p>Delete</p></div>
                                </div>
                            )
                        })}
                    </div>
                </Accordion.Collapse>
                {/* </div> */}
            </React.Fragment>
        </Accordion>
    )
}

export default DeleteEvent
