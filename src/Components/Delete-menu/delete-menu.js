import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const DeleteMenu = () => {

        const [response, setResponse] = useState([])

    useEffect(() => {
            axios.get("http://localhost:3002/api/v1/menu_items")
                .then(res => {
                    let arr = res.data
                    setResponse(arr)
                    console.log(response)
                })
            }, [])

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
                                <div className="delete-card d-flex justify-content-between">
                                    <div className="delete-left"></div>
                                    <div></div>
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
