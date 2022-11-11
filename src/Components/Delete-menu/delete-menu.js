import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

const DeleteMenu = () => {

    const [response, setResponse] = useState([])

    useEffect(() => {
        axios.get("https://princestavernapi.netlify.app/menu_items")
            .then(res => {
                let arr = res.data.menu_items
                setResponse(arr)
            })
        }, [])

    const handleDelete = (id) => {
        axios.delete(`https://princestavernapi.netlify.app/menu_items/${id}`,
        { withCredentials: true })
        .then(response => {
            console.log("menu_item delete response", response)
        }).catch(error => {
            console.log("menu_item delete error", error)
        })
        setResponse(response.filter(item => {
            return item.id !== id
        }))
    }

    return (

        <Accordion>
            <React.Fragment>
                {/* <a className="scehdueled-event-dropdown-a" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> */}
                <Accordion.Toggle variant="link" eventKey="2" className="admin-acord">
                    <div className="new-event-drop">
                        <h2>Delete a menu item</h2>
                    </div>
                </Accordion.Toggle>
                {/* </a> */}
                {/* <div class="collapse" id="collapseExample"> */}
                <Accordion.Collapse eventKey="2" className="acord">
                    <div>
                        {response.map(item => {
                            return (
                                <div className="delete-card d-flex justify-content-between" key={item.id}>
                                    <div className="delete-left">{item.title}</div>
                                    <div className="delete-right" onClick={() => handleDelete(item.id)}><p>Delete</p></div>
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

export default DeleteMenu
