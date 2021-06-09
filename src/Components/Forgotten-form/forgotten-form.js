import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ForgottenForm = ({ code, handleCodeSubmitted, email, handleEmailChange }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3002/forgotten", {
            user: {
                email: email,
                code: code
            }
        }, {
            withCredentials: true
        }).then(response => {
            console.log(response)
            handleCodeSubmitted()
        }).catch(error => {
            console.log("login error", error)
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            </Form.Group>
            
            <div className="form-button-container form-bottom">
                <div>
                    <Link to='/login'>Back to login</Link>
                </div>
                <Button className="form-button" type="submit">
                    Send Code
                </Button>
            </div>
        </Form>
    )
}

export default ForgottenForm
