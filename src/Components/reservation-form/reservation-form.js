import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import history from '../../Helpers/history'

const ReservationForm = ({ loggedInStatus }) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [count, setCount] = useState(2);

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const handleNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleCountChange = (e) => {
        setCount(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://princestavernapi.herokuapp.com//reservations", {
            reservation: {
                user: loggedInStatus.user.id,
                phone_number: phoneNumber,
                date: date,
                time: time,
                count: count,
            }
        }, {
            withCredentials: true
        }).then(response => {
            console.log(response)
            history.push('/reservations')
        }).catch(error => {
            console.log("reservation creation error", error)
        })
    }


    return (
        <div className="form-container">
            <h2>Reservation Form</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Col} >
                    <Form.Label>Date of reservation</Form.Label>
                    <Form.Control type="date" placeholder="Enter Reservation Date" value={date} onChange={handleDateChange} name="reservation-date" required />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Time of reservation</Form.Label>
                    <Form.Control type="time" placeholder="Time of reservation" value={time} onChange={handleTimeChange} required />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" id="phone" name="phone" value={phoneNumber} onChange={handleNumberChange} pattern="[0-9]{10}" placeholder="0585555555" required />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Number of people</Form.Label>
                    <Form.Control as="select" onChange={handleCountChange} value={count} required>
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
