import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const NewEvent = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [pub, setPub] = useState("");
    const [url, setUrl] = useState("");
    const [titleErr, setTitleErr] = useState(false);
    const [descriptionErr, setDescriptionErr] = useState(false);

    const validTitle = new RegExp(".+");
    const validDescription = new RegExp(".+");

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleStartChange = (e) => {
        setStartTime(e.target.value)
    }

    const handleEndChange = (e) => {
        setEndTime(e.target.value)
    }

    const handlePublicChange = (e) => {
        setPub(e.target.value)
    }

    const handleURLChange = (e) => {
        setUrl(e.target.value)
    }

    const checkValidations = () => {
        if(validTitle.test(title) && validDescription.test(description)) {
            return true
        }
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(checkValidations()){
            axios.post("https://princestavernapi.herokuapp.com//events", {
                event: {
                    title: title,
                    description: description,
                    date: date,
                    start_time: startTime,
                    end_time: endTime,
                    pub: pub,
                    url: url
                }
            }, {
                withCredentials: true
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log("event creation error", error)
            })
        } else {
            validTitle.test(title) ? setTitleErr(false) : setTitleErr(true);
            validDescription.test(description) ? setDescriptionErr(false) : setDescriptionErr(true);
        }
    }

    return (

        <Accordion>
            <div>
                {/* <a className="scehdueled-event-dropdown-a" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> */}
                <Accordion.Toggle variant="link" eventKey="0" className="admin-acord">
                    <div className="new-event-drop">
                        <h2>Add a new event</h2>
                    </div>
                </Accordion.Toggle>
                {/* </a> */}
                {/* <div class="collapse" id="collapseExample"> */}
                <Accordion.Collapse eventKey="0" className="acord">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Name of event" className={ titleErr ? "invalid" : ""} onChange={handleTitleChange} value={title} />
                            { titleErr ? <p className="invalid-text">title can not be empty</p> : ""}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control type="text" name="description" className={ descriptionErr ? "invalid" : ""} placeholder="Description" onChange={handleDescriptionChange} value={description} />
                            { descriptionErr ? <p className="invalid-text">description can not be empty</p> : ""}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Date of event</Form.Label>
                            <Form.Control type="date" placeholder="Enter Reservation Date" name="date" onChange={handleDateChange} value={date} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" placeholder="Start Time" name="startTime" onChange={handleStartChange} value={startTime} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" placeholder="End Time" name="endTime" onChange={handleEndChange} value={endTime} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Public or Private Event?</Form.Label>
                            <Form.Control as="select" defaultValue="public" name="public" onChange={handlePublicChange} value={pub} required>
                                <option>public</option>
                                <option>private</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control type="text" name="url" placeholder="Image URL" onChange={handleURLChange} value={url} />
                        </Form.Group>
                        <div className="form-button-container">
                            <Button className="form-button" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>

                </Accordion.Collapse>
                {/* </div> */}
            </div>
        </Accordion>
    )
}

export default NewEvent
