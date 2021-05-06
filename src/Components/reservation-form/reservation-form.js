import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ReservationForm = () => {
    return (
        <div className="form-container">
            <h2>Reservation Form</h2>
            <Form>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="058-555-5555" />
                    </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date of reservation</Form.Label>
                    <Form.Control type="date" placeholder="Enter Reservation Date" name="reservation-date" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Time of reservation</Form.Label>
                    <Form.Control type="time" placeholder="Time of reservation" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Number of people</Form.Label>
                    <Form.Control as="select" defaultValue="2">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Control>
                </Form.Group>
                <div className="form-button-container">
                    <Button className="form-button" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default ReservationForm
