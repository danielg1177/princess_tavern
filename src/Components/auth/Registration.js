import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Registration = ({ handleSuccesfulAuth, handleClick }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [registrationErrors, setRegistrationErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3002/registrations", {
            user: {
                password: password,
                email: email,
                password_confirmation: passwordConfirmation
            }
        }, {
            withCredentials: true
        }).then(response => {
            if (response.data.status === "created") {
                handleSuccesfulAuth(response.data)
            }
        }).catch(error => {
            console.log("registration error", error)
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value)
    }


    return (
        <div className="form-container">
            <h2>Register</h2>

             <Form onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Password Confirmation" name="password_confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} required />
                </Form.Group>

                <div className="form-button-container">
                    <Button className="form-button" type="submit">
                        Register
                    </Button>
                </div>
            </Form>
            <p onClick={handleClick}>Already have an account?</p>
        </div>
    )
}

export default Registration
