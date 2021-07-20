import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import history from '../../Helpers/history'
import { useParams } from "react-router-dom";

const EditReservationForm = () => {

    const id = useParams()
    const [reservation, setReservation] = useState({});
    const [date, setDate] = useState('');
    const [time, setTime] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [count, setCount] = useState(2);

    useEffect(() => {
        axios.get("https://princestavernapi.herokuapp.com/reservations")
        .then(res => {
            let fetchedRes = res.data.reservations.find(reservation => {
                return reservation.id.toString() === id.id
            })
            setDate(fetchedRes.date)
            setTime(fetchedRes.time)
            setPhoneNumber(fetchedRes.phone_number)
            setCount(fetchedRes.count)
            setReservation(fetchedRes)
        }).catch(err => {
            console.log("reservations response", err)
        })
    }, [])

    const handleDelete = (e) => {
        axios.delete(`https://princestavernapi.herokuapp.com/reservations/${id.id}`,
        { withCredentials: true })
        .then(response => {
            console.log("menu_item delete response", response)
            history.push('/reservations')
        }).catch(error => {
            console.log("menu_item delete error", error)
        })
    }

    const checkValidations = () => {

    }

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
        e.preventDefault(reservation.id)
        axios.patch(`https://princestavernapi.herokuapp.com/reservations/${reservation.id}`, {
            reservation: {
                phone_number: phoneNumber,
                date: date,
                time: time,
                count: count,
            }
        }, {
            withCredentials: true
        }).then(response => {
            console.log("reservation update", response)
            history.push('/reservations')
        }).catch(error => {
            console.log("reservation update error", error)
        })
    }


    return (
        <div className="form-container">
            <h2>Update Reservation Form</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date of reservation</Form.Label>
                    <Form.Control type="date" placeholder="Enter Reservation Date" value={date} onChange={handleDateChange} name="reservation-date" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Time of reservation</Form.Label>
                    <Form.Control type="time" placeholder="Time of reservation" value={time} onChange={handleTimeChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" id="phone" name="phone" value={phoneNumber} onChange={handleNumberChange} pattern="[0-9]{10}" placeholder="0585555555" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
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
                <div className="form-button-container-edit">
                    <Button className="form-button delete-button-edit" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button className="form-button" type="submit">
                        Update
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default EditReservationForm
